import Skeleton from "@/components/skeleton";

type RemoveBookmarkButtonViewProps = {
  postId: number;
  removeBookmark: (postId: number) => void;
  hasHydrated: boolean;
};

export function RemoveBookmarkButtonView({
  postId,
  removeBookmark,
  hasHydrated,
}: RemoveBookmarkButtonViewProps) {
  if (!hasHydrated) return <Skeleton width={95} height={22} />;

  return <button onClick={() => removeBookmark(postId)}>🗑️ Remove</button>;
}
