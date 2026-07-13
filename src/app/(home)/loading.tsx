import { Title } from "@/components/title";
import styles from "./page.module.css";
import listStyles from "@/features/post-list/PostList.module.css";
import PostCardSkeleton from "@/features/post-card/PostCardSkeleton.view";

export default function RootLoading() {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <Title as="h1">Dev.to Reader Title</Title>

        <div className={listStyles.postListContainer}>
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
        </div>
      </div>
    </div>
  );
}
