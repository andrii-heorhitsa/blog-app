"use client";

import { useBookmarkStore } from "@/store/use-bookmark-store";
import styles from "./Header.module.css";
import { Title } from "@/components/title";
import useHasHydrated from "@/hooks/use-has-hydrated";
import Skeleton from "@/components/skeleton";

export function Header() {
  const hasHydrated = useHasHydrated();
  const bookmarksCount = useBookmarkStore(
    (state) => state.bookmarkedIds.length,
  );

  return (
    <header className={styles.header}>
      <span>🚀 Dev.to Reader</span>
      <Title as="h4">
        {hasHydrated ? (
          `Bookmarks quantity: ${bookmarksCount}`
        ) : (
          <Skeleton width={180} height={24} />
        )}
      </Title>
    </header>
  );
}
