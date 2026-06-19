import { Title } from "@/components/title";
import styles from "./page.module.css";
import { getPosts } from "@/lib/devtoService";
import { PostList } from "@/features/post-list";

export default async function Home() {
  const posts = await getPosts();

  console.log(posts);
  return (
    <div className={styles.main}>
      <main className={styles.container}>
        <Title as="h1">Dev.to Reader Title</Title>
        <PostList posts={posts} />
      </main>
    </div>
  );
}
