"use client";

import { PostInfo } from "@/types/posts";
import { PostListView } from "./PostList.view";
import usePosts from "./usePosts";
import useIntersectionObserver from "@/lib/useIntersectionObserver";

interface PostListViewProps {
  initialPosts: PostInfo[];
}

export function PostList({ initialPosts }: PostListViewProps) {
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts(initialPosts);

  const triggerRef = useIntersectionObserver(
    () => {
      fetchNextPage();
    },
    { enabled: hasNextPage },
  );

  return (
    <PostListView
      posts={posts}
      isFetchingNextPage={isFetchingNextPage}
      triggerRef={triggerRef}
    />
  );
}
