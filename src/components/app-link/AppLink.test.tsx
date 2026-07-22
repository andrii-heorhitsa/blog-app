import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AppLink } from "./index";

describe("AppLink", () => {
  it("should render a link with correct href and text when not disabled", () => {
    render(
      <AppLink href="/posts" ariaLabel="Go to posts" className="custom-link">
        Go to posts
      </AppLink>,
    );

    const link = screen.getByRole("link", { name: /go to posts/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/posts");
    expect(link).toHaveClass("custom-link");
  });

  it("should render a span instead of a link when disabled is true", () => {
    render(
      <AppLink href="/posts" disabled={true}>
        Disabled Link
      </AppLink>,
    );

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.getByText("Disabled Link")).toBeInTheDocument();
  });
});
