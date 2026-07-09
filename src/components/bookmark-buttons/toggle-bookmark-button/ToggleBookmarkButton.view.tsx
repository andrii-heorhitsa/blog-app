import Skeleton from "@/components/skeleton";

type ToggleBookmarkButtonViewProps = {
  postId: number;
  toggleBookmark: (postId: number) => void;
  isBookmarked: boolean;
  hasHydrated: boolean;
};

export function ToggleBookmarkButtonView({
  postId,
  toggleBookmark,
  isBookmarked,
  hasHydrated,
}: ToggleBookmarkButtonViewProps) {
  if (!hasHydrated) return <Skeleton width={95} height={22} />;

  return (
    <button onClick={() => toggleBookmark(postId)}>
      {isBookmarked ? "❤️" : "Add bookmark"}
    </button>
  );
}
