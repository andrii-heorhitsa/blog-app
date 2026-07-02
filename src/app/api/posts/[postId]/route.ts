import { getPostById } from "@/lib/devtoService";
import { NextRequest } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ postId: string }> },
) {
  const { postId } = await params;

  try {
    const post = await getPostById(postId);
    return Response.json({ success: true, data: post });
  } catch {
    return Response.json(
      { error: `Failed to fetch article with id ${postId}` },
      { status: 500 },
    );
  }
}
