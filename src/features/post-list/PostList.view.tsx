import { PostInfo } from "@/types/posts";
import { PostCard } from "../post-card/";
import styles from "./PostList.module.css";

interface PostListViewProps {
  posts: PostInfo[];
  isFetchingNextPage: boolean;
  triggerRef: React.RefObject<HTMLDivElement | null>;
}

export function PostListView({
  posts,
  isFetchingNextPage,
  triggerRef,
}: PostListViewProps) {
  if (!posts) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.postListContainer}>
        {posts.map((post: PostInfo, index: number) => (
          <PostCard key={post.id} post={post} priority={index < 2} />
        ))}
      </div>

      <div ref={triggerRef}>{isFetchingNextPage && "Loading"}</div>
    </div>
  );
}
