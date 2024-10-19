import { PostsListResponse } from "@/services/types";
import Flex from "@design/Flex";
import Typography from "@design/Typography";
import React from "react";

const SinglePostWrapper = ({
  children,
  title,
  content,
}: {
  children?: React.ReactNode;
  title: any;
  content: any;
}) => {
  return (
    <Flex className="flex-col gap-2 justify-start w-full border border-foreground p-4">
      <Typography className="w-full" variant="title">
        {title}
      </Typography>
      <Typography className="w-full" variant="normal">
        {content}
      </Typography>
      {children}
    </Flex>
  );
};
const PostContent = ({ post }: { post: PostsListResponse }) => {
  return (
    <div className="container mx-auto">
      <Typography className="w-full text-red-600 py-3" variant="normal">
        THIS IS A <b>SERVER SIDE</b> PAGE
      </Typography>
      <SinglePostWrapper title="Title" content={post.title} />
      <SinglePostWrapper title="User ID" content={post.userId} />
      <SinglePostWrapper title="Content" content={post.body} />
    </div>
  );
};

export default PostContent;
