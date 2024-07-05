import { getData } from "@/data";
import { NextResponse, NextRequest } from "next/server";

export async function GET(_: NextRequest) {
  const posts = await getData();

  return NextResponse.json({ posts }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { avatar, name, message } = await req.json();
  const posts = await getData();

  const newPost = {
    id: posts.length + 1,
    avatar,
    name,
    message,
  };

  posts.push(newPost);

  return NextResponse.json({ posts }, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  if (!id)
    return NextResponse.json({ error: "Id is required" }, { status: 400 });

  const posts = await getData();

  const index = posts.findIndex((post) => post.id === parseInt(id));

  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  posts.splice(index, 1);

  return NextResponse.json({ posts }, { status: 200 });
}
