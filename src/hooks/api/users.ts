import { usersList } from "@/services/apis";
import { useQuery } from "@tanstack/react-query";

export function useUsersList() {
  return useQuery({
    queryKey: ["fetchUsers"],
    queryFn: () => usersList({ queryParameters: { results: 1000 } }),
  });
}
