"use client";
import { usePostsList } from "@/hooks/api/posts";
import Button from "@design/Button";
import Flex from "@design/Flex";
import Typography from "@design/Typography";
import { useRouter } from "next/navigation";

const DashboardContainer = () => {
  const { data: posts, isLoading } = usePostsList();
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
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <Flex vertical className="w-full gap-4">
          {posts?.map((post) => (
            <div className=" flex flex-col rounded-md border border-purple-500 p-4 w-full">
              <Typography>{`Title : ${post.title}`}</Typography>
              <Typography>{`Body : ${post.body}`}</Typography>
              <Typography>{`User id : ${post.userId}`}</Typography>
              <Typography>{`Post id : ${post.id}`}</Typography>
            </div>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default DashboardContainer;
