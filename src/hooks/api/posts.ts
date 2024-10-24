import { postsList, singlePost } from "@/services/apis";
import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/libs/query/queryClient";
import { PostsListResponse } from "@/services/types";

export function usePostsList() {
  return useQuery({
    queryKey: ["fetchPosts"],
    queryFn: () => postsList(),
  });
}

export function useSsrPostsList() {
  return getQueryClient().fetchQuery<PostsListResponse[]>({
    queryKey: ["fetchSsrPosts"],
    queryFn: () => postsList(),
  });
}

export function useSsrPosts(id: string) {
  return getQueryClient().fetchQuery<PostsListResponse>({
    queryKey: ["fetchSsrSinglePost"],
    queryFn: () => singlePost({ id }),
  });
}
