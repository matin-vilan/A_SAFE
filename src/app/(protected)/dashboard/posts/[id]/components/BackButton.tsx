"use client";
import Button from "@design/Button";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button data-test="back-button" onClick={() => router.back()}>
      Back
    </Button>
  );
};

export default BackButton;
