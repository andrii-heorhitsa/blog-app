import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ScrollToTopButton } from "./index";
import styles from "./ScrollToTopButton.module.css";

// Функція-помічник для зміни позиції скролу в JSDOM
const setScrollY = (value: number) => {
  Object.defineProperty(window, "scrollY", {
    value,
    configurable: true,
  });
};

describe("ScrollToTopButton", () => {
  beforeEach(() => {
    // 1. Мокаємо метод window.scrollTo, щоб він не викликав помилок
    window.scrollTo = vi.fn();
    // 2. Скидаємо скрол в 0 перед кожним тестом
    setScrollY(0);
  });

  afterEach(() => {
    // Очищаємо всі моки після кожного тесту
    vi.clearAllMocks();
  });

  it("should render the button in the document", () => {
    render(<ScrollToTopButton />);

    // Шукаємо кнопку за її семантичною роллю та aria-label
    const button = screen.getByRole("button", { name: /scroll up/i });
    expect(button).toBeInTheDocument();
  });

  it("should initially be hidden (should not have the visible class)", () => {
    render(<ScrollToTopButton />);

    const button = screen.getByRole("button", { name: /scroll up/i });

    // Перевіряємо, що початково класу 'visible' немає (кнопка схована через CSS)
    expect(button.className).not.toContain(styles.visible);
  });

  it("should become visible when scrolled past the threshold (400px)", () => {
    render(<ScrollToTopButton />);
    const button = screen.getByRole("button", { name: /scroll up/i });

    // Імітуємо скрол вниз на 450px
    setScrollY(450);
    fireEvent.scroll(window);

    // Тепер кнопка повинна отримати клас видимості
    expect(button.className).toContain(styles.visible);
  });

  it("should hide again when scrolled back below the threshold", () => {
    render(<ScrollToTopButton />);
    const button = screen.getByRole("button", { name: /scroll up/i });

    // Скролимо вниз (показуємо кнопку)
    setScrollY(450);
    fireEvent.scroll(window);
    expect(button.className).toContain(styles.visible);

    // Скролимо назад вгору на 200px (менше за поріг 400)
    setScrollY(200);
    fireEvent.scroll(window);

    // Кнопка має знову сховатися
    expect(button.className).not.toContain(styles.visible);
  });

  it("should call window.scrollTo with correct parameters when clicked", () => {
    render(<ScrollToTopButton />);
    const button = screen.getByRole("button", { name: /scroll up/i });

    // Клікаємо на кнопку
    fireEvent.click(button);

    // Перевіряємо, чи викликався нативний метод скролу з нашими пропсами
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
