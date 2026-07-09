"use client";

import { useBookmarkStore } from "@/store/use-bookmark-store";
import styles from "./Header.module.css";
import { Title } from "@/components/title";
import useHasHydrated from "@/hooks/use-has-hydrated";
import Skeleton from "@/components/skeleton";
import { AppLink } from "@/components/app-link";

export function Header() {
  const hasHydrated = useHasHydrated();
  const bookmarksCount = useBookmarkStore(
    (state) => state.bookmarkedIds.length,
  );

  return (
    <header className={styles.header}>
      <AppLink href={"/"} ariaLabel={`Home Page Link`}>
        <span>🚀 Dev.to Reader</span>
      </AppLink>

      <AppLink href={"/bookmarks"} ariaLabel={`Bookmarks Link`}>
        <Title as="h4">
          {hasHydrated ? (
            `Bookmarks quantity: ${bookmarksCount}`
          ) : (
            <Skeleton width={180} height={24} />
          )}
        </Title>
      </AppLink>
    </header>
  );
}
