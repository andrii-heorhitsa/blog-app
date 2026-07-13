import Skeleton from "@/components/skeleton";
import styles from "./PostDetail.module.css";

export default function PostDetailSkeleton() {
  return (
    <div className={styles.postPageContainer}>
      <div className={styles.postHeaderContainer}>
        <Skeleton width="80%" height="24px" />
      </div>
      <div className={styles.pagePreviewContainer}>
        <div className={styles.postPageAuthorBlock}>
          <Skeleton width={32} height={32} circle />
        </div>
        <div className={styles.imageWrapper}>
          <Skeleton width="100%" height="100%" />
        </div>
      </div>
      <div className={styles.postBody}>
        <Skeleton width="80%" height="24px" />
        <Skeleton width="100%" height="12px" />
        <Skeleton width="100%" height="12px" />
        <Skeleton width="100%" height="12px" />
        <Skeleton width="100%" height="12px" />
        <Skeleton width="100%" height="12px" />
      </div>
    </div>
  );
}
