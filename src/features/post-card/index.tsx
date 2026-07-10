import { PostsInfo } from "@/types/posts";
import { PostCardView } from "./PostCard.view";

type PostCardProps = {
  post: PostsInfo;
  priority?: boolean;
  actions: React.ReactNode;
  fetchPriority?: "high" | "auto";
};

export function PostCard({
  post,
  priority,
  fetchPriority,
  actions,
}: PostCardProps) {
  return (
    <PostCardView
      post={post}
      priority={priority}
      fetchPriority={fetchPriority}
      actions={actions}
    />
  );
}
