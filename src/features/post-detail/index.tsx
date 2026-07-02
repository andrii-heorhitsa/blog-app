"use client";

import PostDetailView from "./PostDetail.view";
import usePost from "./usePost";

export function PostDetail({ postId }: { postId: string }) {
  const { post, isLoading, error } = usePost(postId);

  return <PostDetailView post={post} isLoading={isLoading} error={error} />;
}
