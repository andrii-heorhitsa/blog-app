import { PostInfo } from "@/types/posts";
import { PostCard } from "../post-card/";

interface PostListViewProps {
  posts: PostInfo[];
}

export function PostListView({ posts }: PostListViewProps) {
  return (
    <>
      {posts.map((post: PostInfo) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}
