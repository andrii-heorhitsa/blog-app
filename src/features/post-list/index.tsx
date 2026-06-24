"use client";

import { PostInfo } from "@/types/posts";
import { PostListView } from "./PostList.view";
import usePosts from "./usePosts";

interface PostListViewProps {
  initialPosts: PostInfo[];
}

export function PostList({ initialPosts }: PostListViewProps) {
  const { data, fetchNextPage } = usePosts(initialPosts);
  const posts = data?.pages.flatMap((page) => page.data);

  return <PostListView posts={posts} onLoadMore={fetchNextPage} />;
}
