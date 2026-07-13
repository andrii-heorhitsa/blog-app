"use client";

import PostDetailSkeleton from "@/features/post-detail/PostDetailSkeleton.view";
import { useEffect } from "react";

export default function PostPageRootLoading() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PostDetailSkeleton />
    </>
  );
}
