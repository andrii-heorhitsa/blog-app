import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookmarkState = {
  bookmarkedIds: number[];
  toggleBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
};

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set) => ({
      bookmarkedIds: [],
      toggleBookmark: (id: number) =>
        set((state) => {
          const isBookmarkedIds = state.bookmarkedIds.includes(id);

          return {
            bookmarkedIds: isBookmarkedIds
              ? state.bookmarkedIds.filter((bookmarkId) => bookmarkId !== id)
              : [...state.bookmarkedIds, id],
          };
        }),
      removeBookmark: (id: number) =>
        set((state) => {
          return {
            bookmarkedIds: state.bookmarkedIds.filter(
              (bookmarkId) => bookmarkId !== id,
            ),
          };
        }),
    }),
    {
      name: "devto-bookmarks",
    },
  ),
);

// Cross-Tab state sync fix. test version
if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key === "devto-bookmarks") {
      useBookmarkStore.persist.rehydrate();
    }
  });
}
