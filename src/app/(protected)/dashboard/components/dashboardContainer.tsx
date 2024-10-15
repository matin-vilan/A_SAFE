"use client";
import { usePostsList } from "@/hooks/api/posts";
import React from "react";

const DashboardContainer = () => {
  const { data, isLoading } = usePostsList();
  console.log("hi", data);
  return <p>DashboardPage</p>;
};

export default DashboardContainer;
