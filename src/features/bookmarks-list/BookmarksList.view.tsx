import { PostInfo, PostsInfo } from "@/types/posts";
import { PostCard } from "../post-card";
import styles from "../post-list/PostList.module.css";
import PostCardSkeleton from "../post-card/PostCardSkeleton.view";
import { Title } from "@/components/title";

type BookmarksListProps = {
  posts: PostInfo[];
  isLoading: boolean;
  hasBookmarks: boolean;
};

export function BookmarksListView({
  posts,
  isLoading,
  hasBookmarks,
}: BookmarksListProps) {
  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.postListContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (!hasBookmarks) {
    return (
      <>
        <Title>You have no bookmarks yet</Title>
        <p>Please add any posts from Home Page as favorite to see it here</p>
      </>
    );
  }

  return (
    <>
      <Title>Bookmarks List Title</Title>
      <div className={styles.wrapper}>
        <div className={styles.postListContainer}>
          {posts.map((post: PostInfo, index: number) => (
            <PostCard key={post.id} post={post} priority={index < 3} />
          ))}
        </div>
      </div>
    </>
  );
}
