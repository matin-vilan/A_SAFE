import { postsList } from "@/services/apis";
import { useQuery } from "@tanstack/react-query";

export function usePostsList() {
  return useQuery({
    queryKey: ["fetchPosts"],
    queryFn: () => postsList(),
  });
}
