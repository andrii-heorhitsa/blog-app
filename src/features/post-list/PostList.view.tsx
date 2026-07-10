import { PostsInfo } from "@/types/posts";
import { PostCard } from "../post-card/";
import styles from "./PostList.module.css";
import PostCardSkeleton from "../post-card/PostCardSkeleton.view";
import { ToggleBookmarkButton } from "@/components/bookmark-buttons/toggle-bookmark-button";

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.postListContainer}>
        {posts.map((post: PostsInfo, index: number) => (
          <PostCard
            key={post.id}
            post={post}
            priority={index < 3}
            fetchPriority={index === 0 ? "high" : "auto"}
            actions={<ToggleBookmarkButton postId={post.id} />}
          />
        ))}

        {isFetchingNextPage && (
          <>
            <PostCardSkeleton />
            <PostCardSkeleton />
            <PostCardSkeleton />
          </>
        )}
      </div>

      <div ref={triggerRef} className={styles.trigger}></div>
    </div>
  );
}
