import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Title } from "./index"; // Перевір шлях до файлу компонента
import styles from "./Title.module.css";
import typography from "@/styles/typography.module.css";

describe("Title", () => {
  it("should render an h2 tag by default with children content", () => {
    render(<Title>Default Heading</Title>);

    // В accessibility tree всі заголовки (h1-h6) мають роль "heading".
    // level: 2 означає <h2>
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /default heading/i,
    });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe("h2");
  });

  it("should render the specified heading tag when 'as' prop is provided", () => {
    render(<Title as="h1">Main Title</Title>);

    // level: 1 означає <h1>
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /main title/i,
    });

    expect(heading).toBeInTheDocument();
    expect(heading.tagName.toLowerCase()).toBe("h1");
  });

  it("should apply correct CSS classes from modules and custom className", () => {
    render(
      <Title as="h3" className="custom-title-class">
        Custom Styles Title
      </Title>,
    );

    const heading = screen.getByRole("heading", { level: 3 });

    // Перевіряємо, що всі необхідні класи на місці
    expect(heading).toHaveClass(styles.title);
    expect(heading).toHaveClass(typography.h3);
    expect(heading).toHaveClass("custom-title-class");
  });
});
