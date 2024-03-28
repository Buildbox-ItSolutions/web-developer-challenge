import PostLeitura from "../PostLeitura/PostLeitura";
import { GetPosts } from "../../lib/Data";

export default async function TodosPosts() {
  const posts = await GetPosts();

  return (
    <div className="flex flex-col gap-6  pb-8 justify-center items-center  ">
      {posts.map((post, index) => (
        <PostLeitura key={index} post={post} />
      ))}
    </div>
  );
}
