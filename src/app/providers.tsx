"use client";

import { createIDBPersister } from "@/libs/query/persister.client";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { SessionProvider, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const globalRetry = (failureCount: number) => failureCount <= 2;

const persister = createIDBPersister();

const unauthorizedStatuses = [401];

function useGlobalErrors({
  onAuthError = () => {},
  onServerError = () => {},
  onRecover = () => {},
}) {
  const triggerError = (error: any) => {
    if (error?.response) {
      const {
        response: { status },
      } = error;

      if (unauthorizedStatuses.includes(status)) {
        onAuthError();
      } else if (status === 500) {
        onServerError();
      }
    }
  };

  const queryCache = new QueryCache({
    onError(error) {
      if (error) {
        triggerError(error);
      }
    },
    onSuccess() {
      onRecover();
    },
  });

  const mutationCache = new MutationCache({
    onError(error) {
      if (error) {
        triggerError(error);
      }
    },
    onSuccess() {
      onRecover();
    },
  });

  return { queryCache, mutationCache };
}

type IProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: IProvidersProps) {
  const router = useRouter();

  const { queryCache, mutationCache } = useGlobalErrors({
    onAuthError: () => {
      signOut();
      router.push("/");
    },
  });

  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache,
        mutationCache,
        defaultOptions: {
          mutations: {
            retry: false,
          },
          queries: {
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            // staleTime: 5 * 1000,
            retry: (failureCount, error: any) => {
              if ([401, 404].includes(error.response?.status)) {
                return false;
              }

              return globalRetry(failureCount);
            },
          },
        },
      })
  );

  return (
    <SessionProvider>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{
          persister,
          dehydrateOptions: {
            shouldDehydrateQuery: (query) => {
              const queryIsReadyForPersistance =
                query.state.status === "success";
              if (queryIsReadyForPersistance) {
                return !((query.state?.data as any)?.pages?.length > 1);
              } else {
                return false;
              }
            },
          },
        }}
      >
        {children}
      </PersistQueryClientProvider>
    </SessionProvider>
  );
}
