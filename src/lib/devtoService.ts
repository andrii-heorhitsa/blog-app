import { PostInfoDto } from "@/types/posts";

type RawPost = {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  social_image: string;
  readable_publish_date: string;
  reading_time_minutes: number;
};

const DEVTO_API_URL = "https://dev.to/api";

export async function getPosts(
  perPage: number = 10,
  page?: number,
): Promise<PostInfoDto[]> {
  const result = await fetch(
    `${DEVTO_API_URL}/articles?per_page=${perPage}${page ? `&page=${page}` : ""}`,
  );

  if (!result.ok) {
    throw new Error("Failed to fetch articles");
  }

  const rawPosts: RawPost[] = await result.json();

  return rawPosts.map((post) => ({
    id: post.id,
    title: post.title,
    description: post.description,
    coverImage: post.cover_image || post.social_image,
    publishedAt: post.readable_publish_date,
    readingTime: post.reading_time_minutes,
  }));
}
