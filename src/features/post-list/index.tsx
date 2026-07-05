"use client";

import { PostListView } from "./PostList.view";
import usePosts from "./usePosts";
import useIntersectionObserver from "@/lib/use-intersection-observer";

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
