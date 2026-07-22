import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { ToggleBookmarkButton } from "./index";
import { useBookmarkStore } from "@/store/use-bookmark-store";
import useHasHydrated from "@/hooks/use-has-hydrated";

// 1. Мокаємо хук гідрації, щоб мати можливість перемикати його значення
vi.mock("@/hooks/use-has-hydrated", () => ({
  default: vi.fn(),
}));

describe("ToggleBookmarkButton", () => {
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

    render(<ToggleBookmarkButton postId={mockPostId} />);

    // Перевіряємо, що справжня кнопка ще НЕ відрендерилась
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should render 'Add bookmark' when post is not in bookmarks", () => {
    render(<ToggleBookmarkButton postId={mockPostId} />);

    const button = screen.getByRole("button", { name: /add bookmark/i });
    expect(button).toBeInTheDocument();
  });

  it("should render '❤️' when post is already in bookmarks", () => {
    // Початково записуємо ID поста у Zustand-стор
    useBookmarkStore.setState({ bookmarkedIds: [mockPostId] });

    render(<ToggleBookmarkButton postId={mockPostId} />);

    const button = screen.getByRole("button", { name: "❤️" });
    expect(button).toBeInTheDocument();
  });

  it("should toggle bookmark status and update Zustand store on click", () => {
    render(<ToggleBookmarkButton postId={mockPostId} />);

    const button = screen.getByRole("button");

    // 1. Перевіряємо початковий стан UI
    expect(button).toHaveTextContent("Add bookmark");

    // 2. Клікаємо по кнопці
    fireEvent.click(button);

    // 3. Перевіряємо, що UI оновився на "❤️", а в стор додався ID
    expect(button).toHaveTextContent("❤️");
    expect(useBookmarkStore.getState().bookmarkedIds).toContain(mockPostId);

    // 4. Клікаємо повторно
    fireEvent.click(button);

    // 5. Перевіряємо, що повернули початковий стан і видалили ID зі стору
    expect(button).toHaveTextContent("Add bookmark");
    expect(useBookmarkStore.getState().bookmarkedIds).not.toContain(mockPostId);
  });
});
