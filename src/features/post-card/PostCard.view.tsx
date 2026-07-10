import { Title } from "@/components/title";
import { PostsInfo } from "@/types/posts";
import Image from "next/image";
import styles from "./PostCard.module.css";
import { AppLink } from "@/components/app-link";

type PostCardViewProps = {
  post: PostsInfo;
  priority?: boolean;
  actions: React.ReactNode;
  fetchPriority?: "high" | "auto";
};

export function PostCardView({
  post,
  priority = false,
  actions,
  fetchPriority,
}: PostCardViewProps) {
  const { id, title, description, coverImage, publishedAt, readingTime } = post;

  return (
    <div className={styles.postCardContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={coverImage}
          alt={title}
          fill
          className={styles.cardImage}
          sizes="(max-width: 720px) 100vw, 720px"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={fetchPriority ?? "auto"}
        />
      </div>

      <div className={styles.content}>
        <AppLink
          href={`/posts/${id}`}
          ariaLabel={`Read more about ${post.title}`}
        >
          <Title as="h3">{title}</Title>
        </AppLink>

        <hr />

        <div className={styles.meta}>
          <span className={styles.publishedAt}>🗓️{publishedAt}</span>
          <span className={styles.readingTime}>
            🕰️{readingTime} minutes reading time
          </span>
        </div>

        <div className={styles.buttonWrapper}>{actions}</div>

        <p className={styles.description}>{description}</p>

        <AppLink
          href={`/posts/${id}`}
          className={styles.readMore}
          ariaLabel={`Read more about ${post.title}`}
        >
          Read more <span className={styles.srOnly}>about {post.title}</span>
        </AppLink>
      </div>
    </div>
  );
}
