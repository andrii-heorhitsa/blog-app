import { Title } from "@/components/title";
import { PostInfo } from "@/types/posts";
import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

type PostCardView = {
  post: PostInfo;
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
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </div>

      <div className={styles.content}>
        <Title as="h3">{title}</Title>

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
