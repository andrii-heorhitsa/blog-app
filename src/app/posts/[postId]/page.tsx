import { PostDetail } from "@/features/post-detail";
import { getPostById } from "@/lib/devto-service";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

type Params = { params: Promise<{ postId: string }> };

export default async function PostPage({ params }: Params) {
  const { postId } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostById(postId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetail postId={postId} />
    </HydrationBoundary>
  );
}
