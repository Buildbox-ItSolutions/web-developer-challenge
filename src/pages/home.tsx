import { Feed } from "@/components/feed";
import { PostForm } from "../components/post-form";

export function HomePage() {
  return (
    <>
      <PostForm />
      <Feed />
    </>
  );
}
