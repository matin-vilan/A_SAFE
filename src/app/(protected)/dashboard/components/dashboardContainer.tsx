"use client";
import { PostsListResponse } from "@/services/types";
import Button from "@design/Button";
import Flex from "@design/Flex";
import Typography from "@design/Typography";
import { useRouter } from "next/navigation";

const DashboardContainer = ({ posts }: { posts: PostsListResponse[] }) => {
  const router = useRouter();

  return (
    <Flex vertical>
      <Flex className="gap-4">
        <Button onClick={() => router.push("/dashboard/chart")}>
          Chart page
        </Button>
        <Button onClick={() => router.push("/dashboard/large-data")}>
          Large Data page
        </Button>
      </Flex>
      <Flex vertical className="w-full gap-4">
        {posts?.map((post) => (
          <div
            data-test="post-card"
            key={post.id}
            className=" flex flex-col rounded-md border border-purple-500 p-4 w-full cursor-pointer hover:border-foreground"
            onClick={() => router.push("/dashboard/posts/1")}
          >
            <Typography>{`Title : ${post.title}`}</Typography>
            <Typography>{`Body : ${post.body}`}</Typography>
            <Typography>{`User id : ${post.userId}`}</Typography>
            <Typography>{`Post id : ${post.id}`}</Typography>
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default DashboardContainer;
