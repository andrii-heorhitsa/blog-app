import { Title } from "@/components/title";
import { PostInfo } from "@/types/posts";
import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

type PostCardView = {
  post: PostInfo;
};

export function PostCard({ post }: PostCardView) {
  const { id, title, description, coverImage, publishedAt, readingTime } = post;

  return (
    <div className="post-card-container">
      <Title as="h2">{title}</Title>
      <div className={styles.imageWrapper}>
        <Image src={coverImage} alt={title} fill className={styles.cardImage} />
      </div>
      <p className={styles.description}>{description}</p>
      <span className={styles.publishedAt}>{publishedAt}</span>
      <span className={styles.readingTime}>{readingTime}</span>
      <Link href={`/posts/${id}`}>Read more</Link>
    </div>
  );
}
