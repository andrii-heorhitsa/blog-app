import Skeleton from "@/components/skeleton";
import styles from "./PostCard.module.css";

export default function PostCardSkeleton() {
  return (
    <div className={styles.postCardContainer}>
      <div className={styles.imageWrapper}>
        <Skeleton height="100%" />
      </div>

      <div className={styles.content}>
        <Skeleton width="80%" height={24} />
      </div>

      <div className={styles.meta}>
        <Skeleton width={70} height={16} />
        <Skeleton width={140} height={16} />
      </div>

      <div className={styles.buttonWrapper}>
        <Skeleton width={95} height={22} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          margin: "16px 0",
        }}
      >
        <Skeleton width="100%" height={14} />
        <Skeleton width="95%" height={14} />
        <Skeleton width="60%" height={14} />
      </div>

      <Skeleton width={80} height={16} />
    </div>
  );
}
