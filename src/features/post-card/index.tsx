import { PostsInfo } from "@/types/posts";
import { PostCardView } from "./PostCard.view";

type PostCardProps = {
  post: PostsInfo;
  priority?: boolean;
  actions: React.ReactNode;
};

export function PostCard({ post, priority, actions }: PostCardProps) {
  return <PostCardView post={post} priority={priority} actions={actions} />;
}
