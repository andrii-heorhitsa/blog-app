import { PostInfo } from "@/types/posts";

type PostsResponse = {
  success: boolean;
  data: PostInfo[];
};
export async function fetchPosts(page: number): Promise<PostsResponse> {
  const response = await fetch(`/api/posts?page=${page}&per_page=10`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
}
