import { Title } from "@/components/title";
import { PostsInfo } from "@/types/posts";
import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

type PostCardView = {
  post: PostsInfo;
  priority?: boolean;
};

export function PostCard({ post, priority = false }: PostCardView) {
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
          priority={priority}
        />
      </div>

      <div className={styles.content}>
        <Link href={`/posts/${id}`}>
          <Title as="h3">{title}</Title>
        </Link>

        <hr />

        <div className={styles.meta}>
          <span className={styles.publishedAt}>🗓️{publishedAt}</span>
          <span className={styles.readingTime}>
            🕰️{readingTime} minutes reading time
          </span>
        </div>

        <p className={styles.description}>{description}</p>

        <Link href={`/posts/${id}`} className={styles.readMore}>
          Read more
        </Link>
      </div>
    </div>
  );
}
