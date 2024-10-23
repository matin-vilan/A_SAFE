import { goldPrices } from "@/services/apis";
import { useQuery } from "@tanstack/react-query";

export function useGoldPrice() {
  return useQuery({
    queryKey: ["fetchGoldsPrice"],
    queryFn: () =>
      goldPrices({
        queryParameters: {
          start_date: "2021-04-22",
          end_date: "2021-04-23",
          api_key: process.env.NEXT_PUBLIC_GOLD_API_KEY || "",
          base: "USD",
          currencies: "XAU",
        },
      }),
  });
}
