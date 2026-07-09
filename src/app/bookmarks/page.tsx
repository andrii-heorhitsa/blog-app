import { BookmarksList } from "@/features/bookmarks-list";
import styles from "../page.module.css";

export default function Bookmarks() {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <BookmarksList />
      </div>
    </div>
  );
}
