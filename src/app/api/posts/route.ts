import { getPosts } from "@/lib/devtoService";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = Number(searchParams.get("page")) || 1;
  const per_page = Number(searchParams.get("per_page")) || 10;

  console.log(req.nextUrl);
  console.log(req.nextUrl.searchParams);
  console.log(Object.fromEntries(searchParams));

  try {
    const posts = await getPosts(per_page, page);
    return Response.json({ success: true, data: posts });
  } catch {
    return Response.json(
      { error: "Failed to fetch articles" },
      { status: 500 },
    );
  }
}
