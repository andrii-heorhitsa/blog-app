"use client";

import { BookmarksListView } from "./BookmarksList.view";
import { useBookmarkList } from "./useBookmarksList";

export function BookmarksList() {
  const { posts, isLoading, hasBookmarks } = useBookmarkList();

  return (
    <>
      <BookmarksListView
        posts={posts}
        isLoading={isLoading}
        hasBookmarks={hasBookmarks}
      />
    </>
  );
}
