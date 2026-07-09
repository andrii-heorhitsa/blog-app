import { fetchPostById } from "@/lib/posts-api-client";
import { useBookmarkStore } from "@/store/use-bookmark-store";
import { PostInfo } from "@/types/posts";
import { useQueries } from "@tanstack/react-query";

export function useBookmarkList() {
  const bookmarkedIds = useBookmarkStore((state) => state.bookmarkedIds);
  const queryResults = useQueries({
    queries: bookmarkedIds.map((postId) => ({
      queryKey: ["post", postId],
      queryFn: () => fetchPostById(String(postId)),
      staleTime: 5 * 60 * 1000,
    })),
  });

  const posts = queryResults
    .map((result) => result.data)
    .filter((post): post is PostInfo => post !== undefined);
  const isLoading = queryResults.some((result) => result.isLoading);

  return {
    posts,
    isLoading,
    hasBookmarks: bookmarkedIds.length > 0,
  };
}
