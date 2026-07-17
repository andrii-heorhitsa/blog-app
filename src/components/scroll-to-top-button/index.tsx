"use client";

import { useEffect, useState } from "react";
import ScrollToTopButtonView from "./ScrollToTopButton.view";

const SCROLL_THRESHOLD = 400;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <ScrollToTopButtonView isVisible={isVisible} onClick={scrollToTop} />;
}
