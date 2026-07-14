import { BookmarksList } from "@/features/bookmarks-list";
import styles from "../(home)/page.module.css";

export default function Bookmarks() {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <BookmarksList />
      </div>
    </div>
  );
}
