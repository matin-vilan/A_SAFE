import { useGoldPrice } from "@/hooks/api/goldPrice";
import { Chart } from "chart.js/auto";
import React, { useEffect, useMemo, useRef } from "react";

const GoldContainer = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const { data: goldPrice, isLoading } = useGoldPrice();

  const formattedChartData = useMemo(
    () =>
      goldPrice
        ? Object.entries(goldPrice?.rates).map((g) => ({
            date: g[0],
            xau: g[1].XAU,
            usdxau: g[1].USDXAU,
          }))
        : [],
    [goldPrice]
  );

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

        const options: Chart.ChartOptions = {
          responsive: true,
          // scales: {
          //   // @ts-ignore
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
          // @ts-ignore
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
      <canvas data-test="chart" ref={chartRef} />
    </div>
  );
};

export default GoldContainer;
