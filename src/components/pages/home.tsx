"use client";
import Flex from "@design/Flex";
import Button from "@design/Button";
import Typography from "@design/Typography";
import { useRouter } from "next/navigation";

const HomePageContainer = () => {
  const router = useRouter();
  return (
    <Flex>
      <div>
        <Typography variant="description">Hello All!</Typography>
      </div>
      <Button onClick={() => router.push("/dashboard")}>GO TO DASHBOARD</Button>
    </Flex>
  );
};

export default HomePageContainer;
