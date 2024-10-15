"use client";
import Button from "@design/Button";
import Flex from "@design/Flex";
import { useRouter } from "next/navigation";

const DashboardContainer = () => {
  const router = useRouter();

  return (
    <Flex vertical>
      <Button onClick={() => router.push("/dashboard/chart")}>
        Chart page
      </Button>
    </Flex>
  );
};

export default DashboardContainer;
