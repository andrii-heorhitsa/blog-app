import { Title } from "@/components/title";
import styles from "./page.module.css";
import { getPosts } from "@/lib/devtoService";
import { PostList } from "@/features/post-list";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam }) => {
      const rawPosts = await getPosts(10, pageParam);
      console.log(pageParam);

      return {
        success: true,
        data: rawPosts,
      };
    },
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className={styles.main}>
        <main className={styles.container}>
          <Title as="h1">Dev.to Reader Title</Title>
          <PostList />
        </main>
      </div>
    </HydrationBoundary>
  );
}
