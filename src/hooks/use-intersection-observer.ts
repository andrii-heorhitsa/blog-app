import { useEffect, useRef } from "react";

type ObserverOptions = {
  enabled?: boolean;
  rootMargin?: string;
};

export default function useIntersectionObserver(
  callback: () => void,
  options: ObserverOptions = {},
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const savedCallback = useRef(callback);
  const { enabled = true, rootMargin = "400px" } = options;

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          savedCallback.current();
        }
      },
      { rootMargin },
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [enabled, rootMargin]);

  return ref;
}
