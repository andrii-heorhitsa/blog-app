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
  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!post) return <div>The article is not found</div>;

  return (
    <div className={styles.postPageContainer}>
      <div className={styles.postHeaderContainer}>
        <Title as="h3">{post.title}</Title>
        <Title as="h4"> (by {post.author.name})</Title>
        <hr />
      </div>
      <div className={styles.pagePreviewContainer}>
        <div className={styles.postPageAuthorBlock}>
          <Image
            src={post.author.profileImage}
            alt={post.author.name}
            width={32}
            height={32}
            className={styles.authorAvatar}
          />
          <div className={styles.authorMeta}>
            <span>
              {post.author.username}
              {post.author.twitterUsername &&
                ` / @${post.author.twitterUsername}`}
            </span>
            <span>{post.publishedAt}🗓️</span>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className={styles.postImage}
            sizes="(max-width: 720px) 100vw, 720px"
          />
        </div>
        <div className={styles.postDateBlock}>
          <span>🕰️Reading time - {post.readingTime}min</span>
        </div>
      </div>
      <div
        className={styles.postBody}
        dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
      ></div>
    </div>
  );
}
