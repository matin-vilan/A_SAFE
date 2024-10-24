import { useGoldPrice } from "@/hooks/api/goldPrice";
import Calendar from "@components/calendar";
import { Chart } from "chart.js/auto";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DateValueType } from "react-tailwindcss-datepicker";

const GoldContainer = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [date, setDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const { data: goldPrice, isLoading } = useGoldPrice({
    startDate: date?.startDate || null,
    endDate: date?.endDate || null,
  });

  const formattedChartData = useMemo(() => {
    if (!goldPrice?.success) return;
    return goldPrice
      ? Object.entries(goldPrice?.rates).map((g) => ({
          date: g[0],
          xau: g[1].XAU,
          usdxau: g[1].USDXAU,
        }))
      : [];
  }, [goldPrice]);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx && !!formattedChartData) {
        const data = {
          labels: formattedChartData.map((countItem) => countItem.date),
          datasets: [
            {
              label: "GOLD PRICE",
              data: formattedChartData.map((countItem) => countItem.xau),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };

        const options = {
          responsive: true,
          // scales: {
          //   y: {
          //     suggestedMin: 0,
          //     suggestedMax: 20,
          //   },
          // },
        };

        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: "line",
          data,
          options,
        });
      }
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [formattedChartData]);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div className="p-12">
      <div className="w-full py-3">
        <Calendar
          onChange={(val) =>
            setDate({
              startDate: val?.startDate ? val.startDate : null,
              endDate: val?.endDate ? val.endDate : null,
            })
          }
          value={date}
          useRange={false}
          placeholder="Start Date - End Date"
        />
      </div>
      <canvas data-test="chart" ref={chartRef} />
    </div>
  );
};

export default GoldContainer;
