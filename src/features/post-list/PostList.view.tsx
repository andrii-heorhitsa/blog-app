import { PostInfo } from "@/types/posts";
import { PostCard } from "../post-card/";
import styles from "./PostList.module.css";

interface PostListViewProps {
  posts: PostInfo[];
}

export function PostListView({ posts }: PostListViewProps) {
  return (
    <div className={styles.postListContainer}>
      {posts.map((post: PostInfo, index: number) => (
        <PostCard key={post.id} post={post} priority={index < 2} />
      ))}
    </div>
  );
}
