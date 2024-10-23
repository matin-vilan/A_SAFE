import React from "react";
import Flex from "@design/Flex";
import Typography from "@design/Typography";
import Link from "next/link";
import { PostsListResponse } from "@/services/types";

const PostsListContainer = ({ posts }: { posts: PostsListResponse[] }) => {
  return (
    <>
      <Typography className="text-red-600" variant="title">
        THIS IS A <b>SERVER SIDE</b> PAGE
      </Typography>

      <Flex vertical className="w-full gap-4">
        {posts && posts.length > 0 ? (
          posts?.map((post) => (
            <div
              data-test={`post-card-${post.id}`}
              key={post.id}
              className=" flex flex-col rounded-md border border-purple-500 p-4 w-full cursor-pointer hover:border-foreground"
            >
              <Link href={`/dashboard/posts/${post.id}`}>
                <Typography>{`Title : ${post.title}`}</Typography>
                <Typography>{`Body : ${post.body}`}</Typography>
                <Typography>{`User id : ${post.userId}`}</Typography>
                <Typography>{`Post id : ${post.id}`}</Typography>
              </Link>
            </div>
          ))
        ) : (
          <Typography>No posts available</Typography>
        )}
      </Flex>
    </>
  );
};

export default PostsListContainer;
