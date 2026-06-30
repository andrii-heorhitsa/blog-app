"use client";

import { PostListView } from "./PostList.view";
import usePosts from "./usePosts";
import useIntersectionObserver from "@/lib/useIntersectionObserver";

export function PostList() {
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts();

  const triggerRef = useIntersectionObserver(
    () => {
      fetchNextPage();
    },
    { enabled: hasNextPage && !isFetchingNextPage },
  );

  return (
    <PostListView
      posts={posts}
      isFetchingNextPage={isFetchingNextPage}
      triggerRef={triggerRef}
    />
  );
}
