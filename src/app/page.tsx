import Header from "@/components/header";
import FeedPost from "@/components/post/feedPost";
import FormPost from "@/components/post/formPost";

export default function Home() {
  return (
    <main className="main-container">
      <FormPost/>
      <FeedPost/>
    </main>
  );
}
