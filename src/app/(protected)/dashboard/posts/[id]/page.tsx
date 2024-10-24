import { useSsrPosts } from "@/hooks/api/posts";
import React from "react";
import PostContent from "./components/PostContent";

const PostDetails = async (props: { params: { id: string } }) => {
  const post = await useSsrPosts(props.params.id);

  return <PostContent post={post} />;
};

export default PostDetails;
