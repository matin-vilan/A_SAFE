import { usePostsList } from "@/hooks/api/posts";
import { PostsListResponse } from "@/services/types";
import { Chart } from "chart.js/auto";
import React, { useEffect, useRef, useState } from "react";

const ChartContainer = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [results, setResults] = useState<{ [key: number]: number }>();

  const { data, isLoading } = usePostsList();

  const countingPostsByUserId = (items: PostsListResponse[]) => {
    const countingPostsByUserIdRes: { [key: number]: number } = {};

    items.map((item) =>
      countingPostsByUserIdRes[item.userId]
        ? (countingPostsByUserIdRes[item.userId] =
            countingPostsByUserIdRes[item.userId] + 1)
        : (countingPostsByUserIdRes[item.userId] = 1)
    );

    setResults(countingPostsByUserIdRes);
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx && !!results) {
        const data = {
          labels: Object.entries(results).map((countItem) => countItem[0]),
          datasets: [
            {
              label: "Posts created by user id",
              data: Object.entries(results).map((countItem) => countItem[1]),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };

        const options = {
          responsive: true,
          scales: {
            y: {
              suggestedMin: 0,
              suggestedMax: 20,
            },
          },
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
  }, [results]);

  useEffect(() => {
    if (data && data.length > 0) {
      countingPostsByUserId(data);
    }
  }, [data]);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div className="p-12">
      <canvas data-test="chart" ref={chartRef} />
    </div>
  );
};

export default ChartContainer;
