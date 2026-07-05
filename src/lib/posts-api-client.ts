import { PostInfo, PostsInfo } from "@/types/posts";

type ApiResponse<T> = {
  success?: boolean;
  data: T;
};

export async function fetchPosts(
  page: number,
): Promise<ApiResponse<PostsInfo[]>> {
  const response = await fetch(`/api/posts?page=${page}&per_page=10`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
}

export async function fetchPostById(id: string): Promise<PostInfo> {
  const response = await fetch(`/api/posts/${id}`);

  if (!response.ok) {
    throw new Error(`Client: Failed to fetch post with id ${id}`);
  }

  const result: { success: boolean; data: PostInfo } = await response.json();

  return result.data;
}
