import { PostsInfo } from "@/types/posts";
import { PostCard } from "../post-card/";
import styles from "./PostList.module.css";

interface PostListViewProps {
  posts: PostsInfo[];
  isFetchingNextPage: boolean;
  triggerRef: React.RefObject<HTMLDivElement | null>;
}

export function PostListView({
  posts,
  isFetchingNextPage,
  triggerRef,
}: PostListViewProps) {
  if (!posts) return null;

  console.log(posts);

  return (
    <div className={styles.wrapper}>
      <div className={styles.postListContainer}>
        {posts.map((post: PostsInfo, index: number) => (
          <PostCard key={post.id} post={post} priority={index < 3} />
        ))}
      </div>

      <div ref={triggerRef} className={styles.trigger}>
        {isFetchingNextPage && "Loading"}
      </div>
    </div>
  );
}
