import { useEffect, useRef } from "react";

export default function useIntersectionObserver(callback: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          savedCallback.current();
        }
      },
      {
        rootMargin: "400px",
      },
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
