import { useBookmarkStore } from "@/store/use-bookmark-store";
import { ToggleBookmarkButtonView } from "./ToggleBookmarkButton.view";
import useHasHydrated from "@/hooks/use-has-hydrated";

type ToggleBookmarkButtonProps = {
  postId: number;
};

export function ToggleBookmarkButton({ postId }: ToggleBookmarkButtonProps) {
  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);
  const isBookmarked = useBookmarkStore((state) =>
    state.bookmarkedIds.includes(postId),
  );
  const hasHydrated = useHasHydrated();

  return (
    <ToggleBookmarkButtonView
      postId={postId}
      toggleBookmark={toggleBookmark}
      isBookmarked={isBookmarked}
      hasHydrated={hasHydrated}
    />
  );
}
