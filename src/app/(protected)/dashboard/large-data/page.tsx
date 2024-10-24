"use client";
import ClientOnly from "@components/clientOnly";
import UsersListContainer from "./components/usersListContainer";
import Button from "@design/Button";
import { useRouter } from "next/navigation";

const LargeData = () => {
  const router = useRouter();

  return (
    <ClientOnly>
      <Button onClick={() => router.back()}>Go back</Button>
      <UsersListContainer />
    </ClientOnly>
  );
};

export default LargeData;
