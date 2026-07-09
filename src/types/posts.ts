export type PostsInfo = {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  publishedAt: string;
  readingTime: number;
};

export type PostAuthor = {
  name: string;
  username: string;
  twitterUsername: string;
  profileImage: string;
};

export type PostInfo = {
  id: number;
  title: string;
  coverImage: string;
  readingTime: number;
  publishedAt: string;
  tags: string[];
  bodyHtml: string;
  description: string;
  author: PostAuthor;
};
