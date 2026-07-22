import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Skeleton from "./index";

describe("Skeleton", () => {
  it("renders div with default dimensions if props are not passed", () => {
    const { container } = render(<Skeleton />);

    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle({ width: "100%", height: "16px" });
  });
  it("adds 'px' to width/height if a number is passed", () => {
    const { container } = render(<Skeleton width={95} height={22} />);

    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle({ width: "95px", height: "22px" });
  });

  it("adds borderRadius 50% if circle=true", () => {
    const { container } = render(<Skeleton circle={true} />);

    const div = container.firstChild as HTMLElement;

    expect(div).toHaveStyle({ borderRadius: "50%" });
  });

  it("does not add borderRadius if circle is not passed", () => {
    const { container } = render(<Skeleton />);

    const div = container.firstChild as HTMLElement;

    expect(div.style.borderRadius).toBe("");
  });

  it("adds className to an element", () => {
    const { container } = render(<Skeleton className="testClass" />);

    const div = container.firstChild as HTMLElement;

    expect(div.className).toContain("testClass");
  });
});
