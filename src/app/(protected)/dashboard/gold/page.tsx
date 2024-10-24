"use client";
import React from "react";
import GoldContainer from "./components/GoldContainer";
import ClientOnly from "@components/clientOnly";

const GoldChartPage = () => {
  return (
    <ClientOnly>
      <GoldContainer />
    </ClientOnly>
  );
};

export default GoldChartPage;
