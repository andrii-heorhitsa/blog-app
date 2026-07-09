import { useBookmarkStore } from "@/store/use-bookmark-store";
import { RemoveBookmarkButtonView } from "./RemoveBookmarkButton.view";
import useHasHydrated from "@/hooks/use-has-hydrated";

export function RemoveBookmarkButton({ postId }: { postId: number }) {
  const removeBookmark = useBookmarkStore((store) => store.removeBookmark);
  const hasHydrated = useHasHydrated();

  return (
    <RemoveBookmarkButtonView
      postId={postId}
      removeBookmark={removeBookmark}
      hasHydrated={hasHydrated}
    />
  );
}
