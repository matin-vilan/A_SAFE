import { formatDate } from "@/libs/formatters";
import { goldPrices } from "@/services/apis";
import { toQueryParams } from "@/services/utils/helpers/general";
import { useQuery } from "@tanstack/react-query";
import { DateValueType } from "react-tailwindcss-datepicker";

export function useGoldPrice(params: DateValueType) {
  return useQuery({
    queryKey: ["fetchGoldsPrice", params],
    queryFn: () =>
      goldPrices({
        queryParameters: {
          start_date: formatDate(params?.startDate, "-") || "2021-04-22",
          end_date: formatDate(params?.endDate, "-") || "2021-04-23",
          api_key: process.env.NEXT_PUBLIC_GOLD_API_KEY || "",
          base: "USD",
          currencies: "XAU",
        },
      }),
  });
}
