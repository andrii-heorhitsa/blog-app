import { Title } from "@/components/title";
import { PostsInfo } from "@/types/posts";
import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";
import { useBookmarkStore } from "@/store/use-bookmark-store";
import useHasHydrated from "@/hooks/use-has-hydrated";
import Skeleton from "@/components/skeleton";
import { AppLink } from "@/components/app-link";

type PostCardViewProps = {
  post: PostsInfo;
  priority?: boolean;
  actions: React.ReactNode;
};

export function PostCardView({
  post,
  priority = false,
  actions,
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
          priority={priority}
        />
      </div>

      <div className={styles.content}>
        <AppLink href={`/posts/${id}`}>
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

        <AppLink href={`/posts/${id}`} className={styles.readMore}>
          Read more
        </AppLink>
      </div>
    </div>
  );
}
