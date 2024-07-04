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
