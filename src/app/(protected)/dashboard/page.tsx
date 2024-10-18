import React from "react";
import DashboardContainer from "./components/dashboardContainer";
import { useSsrPostsList } from "@/hooks/api/posts";
import Typography from "@design/Typography";

const DashboardPage = async () => {
  const posts = await useSsrPostsList();

  return (
    <div>
      <Typography className="text-red-600" variant="title">
        THIS IS A <b>SERVER SIDE</b> PAGE
      </Typography>

      <DashboardContainer posts={posts} />
    </div>
  );
};

export default DashboardPage;
