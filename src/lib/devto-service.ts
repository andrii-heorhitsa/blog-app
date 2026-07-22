import { PostInfo, PostsInfo } from "@/types/posts";
import { sanitizeArticleBody } from "./html-sanitizer";

type PostsInfoDto = {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  social_image: string;
  readable_publish_date: string;
  reading_time_minutes: number;
};

type PostAuthorDto = {
  name: string;
  username: string;
  twitter_username: string | null;
  profile_image: string;
};

type PostInfoDto = {
  id: number;
  title: string;
  cover_image: string | null;
  social_image: string;
  reading_time_minutes: number;
  readable_publish_date: string;
  tags: string[];
  body_html: string;
  description: string;
  user: PostAuthorDto;
};

const DEVTO_API_URL = "https://dev.to/api";

export async function getPosts(
  perPage: number = 10,
  page?: number,
  top: number = 7,
): Promise<PostsInfo[]> {
  const result = await fetch(
    `${DEVTO_API_URL}/articles?per_page=${perPage}${page ? `&page=${page}` : ""}&top=${top}`,
    { next: { revalidate: 60 } },
  );

  if (!result.ok) {
    throw new Error("Failed to fetch articles");
  }

  const rawPosts: PostsInfoDto[] = await result.json();

  return rawPosts.map((post) => ({
    id: post.id,
    title: post.title,
    description: post.description,
    coverImage: post.cover_image || post.social_image,
    publishedAt: post.readable_publish_date,
    readingTime: post.reading_time_minutes,
  }));
}

export async function getPostById(id: string): Promise<PostInfo> {
  const result = await fetch(`${DEVTO_API_URL}/articles/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!result.ok) {
    throw new Error(`Failed to fetch article with id ${id}`);
  }

  const rawPostData: PostInfoDto = await result.json();
  const cleanBodyHtml = sanitizeArticleBody(rawPostData.body_html);

  return {
    id: rawPostData.id,
    title: rawPostData.title,
    coverImage: rawPostData.cover_image || rawPostData.social_image,
    readingTime: rawPostData.reading_time_minutes,
    publishedAt: rawPostData.readable_publish_date,
    tags: rawPostData.tags,
    bodyHtml: cleanBodyHtml,
    description: rawPostData.description,
    author: {
      name: rawPostData.user.name,
      username: rawPostData.user.username,
      twitterUsername: rawPostData.user.twitter_username || "",
      profileImage: rawPostData.user.profile_image,
    },
  };
}
