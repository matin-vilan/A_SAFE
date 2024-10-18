"use client";
import ClientOnly from "@components/clientOnly";
import Button from "@design/Button";
import Typography from "@design/Typography";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";

const ChartContainer = dynamic(() => import("./components/ChartContainer"), {
  ssr: false,
});

const ChartPage = () => {
  const router = useRouter();
  return (
    <ClientOnly>
      <Button onClick={() => router.push("/dashboard")}>Go back</Button>
      <Typography className="text-red-600">
        THIS IS A <b>CLIENT SIDE</b> PAGE
      </Typography>
      <ChartContainer />
    </ClientOnly>
  );
};

export default ChartPage;
