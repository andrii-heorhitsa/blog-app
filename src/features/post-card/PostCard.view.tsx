import { Title } from "@/components/title";
import { PostsInfo } from "@/types/posts";
import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";
import { useBookmarkStore } from "@/store/use-bookmark-store";
import useHasHydrated from "@/hooks/use-has-hydrated";
import Skeleton from "@/components/skeleton";

type PostCardView = {
  post: PostsInfo;
  priority?: boolean;
};

export function PostCard({ post, priority = false }: PostCardView) {
  const { id, title, description, coverImage, publishedAt, readingTime } = post;
  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);
  const hasHydrated = useHasHydrated();
  const isBookmarked = useBookmarkStore((state) =>
    state.bookmarkedIds.includes(post.id),
  );

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

        <div className={styles.buttonWrapper}>
          {hasHydrated ? (
            <button onClick={() => toggleBookmark(post.id)}>
              {isBookmarked ? "❤️" : "Add bookmark"}
            </button>
          ) : (
            <Skeleton width={95} height={22} />
          )}
        </div>

        <p className={styles.description}>{description}</p>

        <Link href={`/posts/${id}`} className={styles.readMore}>
          Read more
        </Link>
      </div>
    </div>
  );
}
