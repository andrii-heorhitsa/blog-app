import { PostInfoDto } from "@/types/posts";

interface PostListViewProps {
  posts: PostInfoDto[];
}

export function PostList({ posts }: PostListViewProps) {
  return (
    <>
      {posts.map((post: PostInfoDto) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </>
  );
}
