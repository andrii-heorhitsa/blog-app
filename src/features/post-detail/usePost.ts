import { fetchPostById } from "@/lib/posts-api-client";
import { useQuery } from "@tanstack/react-query";

export default function usePost(postId: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
    staleTime: 5 * 60 * 1000,
  });
  return {
    post: data,
    isLoading,
    error,
  };
}
