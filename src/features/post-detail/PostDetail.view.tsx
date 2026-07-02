import { Title } from "@/components/title";
import { PostInfo } from "@/types/posts";
import Image from "next/image";
import styles from "./PostDetail.module.css";

type PostDetailViewProps = {
  post: PostInfo | undefined;
  isLoading: boolean;
  error: Error | null;
};

export default function PostDetailView({
  post,
  isLoading,
  error,
}: PostDetailViewProps) {
  if (!post) return <div>The article is not found</div>;

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.postPageContainer}>
      <div className={styles.postHeaderContainer}>
        <Title>{post.title}</Title>
        <span>by {post.author.name}</span>
        <span> aka {post.author.username}</span>
        <span> @{post.author.twitterUsername}</span>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className={styles.postImage}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
