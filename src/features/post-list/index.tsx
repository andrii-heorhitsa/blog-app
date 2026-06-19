import { PostInfo } from "@/types/posts";
import { PostListView } from "./PostList.view";

interface PostListViewProps {
  posts: PostInfo[];
}

export function PostList({ posts }: PostListViewProps) {
  return <PostListView posts={posts} />;
}
