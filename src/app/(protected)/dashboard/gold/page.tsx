"use client";
import React from "react";
import GoldContainer from "./components/GoldContainer";
import ClientOnly from "@components/clientOnly";
import Typography from "@design/Typography";
import Flex from "@design/Flex";

const GoldChartPage = () => {
  return (
    <ClientOnly>
      <Flex vertical>
        <Typography variant="normal">
          Date filter cannot include more than four days
        </Typography>
        <Typography variant="description">
          For more date filter you need to purchase API
        </Typography>
      </Flex>
      <GoldContainer />
    </ClientOnly>
  );
};

export default GoldChartPage;
