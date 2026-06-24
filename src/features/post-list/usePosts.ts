import { fetchPosts } from "@/lib/postsApiClient";
import { PostInfo } from "@/types/posts";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function usePosts(initialPosts: PostInfo[]) {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.length === 0 ? undefined : allPages.length + 1;
    },
    initialData: {
      pages: [{ success: true, data: initialPosts }],
      pageParams: [1],
    },
    staleTime: 60 * 1000,
  });
}
