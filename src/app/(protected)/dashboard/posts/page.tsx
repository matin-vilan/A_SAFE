import { useSsrPostsList } from "@/hooks/api/posts";
import PostsListContainer from "./components/PostsListContainer";

const PostsListPage = async () => {
  const posts = await useSsrPostsList();

  return <PostsListContainer posts={posts} />;
};

export default PostsListPage;
