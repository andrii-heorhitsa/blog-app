import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { RemoveBookmarkButton } from "./index";
import { useBookmarkStore } from "@/store/use-bookmark-store";
import useHasHydrated from "@/hooks/use-has-hydrated";

// 1. Мокаємо хук гідрації, щоб мати можливість перемикати його значення
vi.mock("@/hooks/use-has-hydrated", () => ({
  default: vi.fn(),
}));

describe("RemoveBookmarkButton", () => {
  const mockPostId = 42;

  beforeEach(() => {
    // 2. Скидаємо стан Zustand-стору перед кожним тестом
    useBookmarkStore.setState({ bookmarkedIds: [] });

    // 3. За замовчуванням симулюємо, що гідрація пройшла успішно
    vi.mocked(useHasHydrated).mockReturnValue(true);
  });

  it("should render Skeleton when component is not hydrated yet", () => {
    // Симулюємо стан до закінчення гідрації на клієнті
    vi.mocked(useHasHydrated).mockReturnValue(false);

    render(<RemoveBookmarkButton postId={mockPostId} />);

    // Перевіряємо, що справжня кнопка ще НЕ відрендерилась
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should render '🗑️ Remove' when post is in bookmarks", () => {
    render(<RemoveBookmarkButton postId={mockPostId} />);

    const button = screen.getByRole("button", { name: "🗑️ Remove" });
    expect(button).toBeInTheDocument();
  });

  it("should remove post ID from Zustand store on click", () => {
    useBookmarkStore.setState({ bookmarkedIds: [mockPostId] });

    render(<RemoveBookmarkButton postId={mockPostId} />);
    const button = screen.getByRole("button", { name: "🗑️ Remove" });

    fireEvent.click(button);

    expect(useBookmarkStore.getState().bookmarkedIds).not.toContain(mockPostId);
  });
});
