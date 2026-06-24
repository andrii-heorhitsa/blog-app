import { PostInfo } from "@/types/posts";
import { PostCard } from "../post-card/";
import styles from "./PostList.module.css";

interface PostListViewProps {
  posts: PostInfo[];
  onLoadMore: () => void;
}

export function PostListView({ posts, onLoadMore }: PostListViewProps) {
  if (!posts) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.postListContainer}>
        {posts.map((post: PostInfo, index: number) => (
          <PostCard key={post.id} post={post} priority={index < 2} />
        ))}
      </div>

      <div className={styles.pagination}>
        <button onClick={onLoadMore} className={styles.loadMoreButton}>
          Load more
        </button>
      </div>
    </div>
  );
}
