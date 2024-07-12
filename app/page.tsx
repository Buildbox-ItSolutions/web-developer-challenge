"use client"; 

import Image from "next/image";
import { useState } from "react";
import Post from './model/Post';
import FeedPost from './components/FeedPost';
import PostForm from "./components/PostForm";

export default function Home() {

  const [posts, setPosts] = useState<Post[]>([]);

  const postSubmitedHandler = (post: Post) => {
    setPosts([...posts, post])
  }

  const postDeletedHandler = (post: Post) => {
    setPosts(posts.filter(x => x.id != post.id))
  }

  return (
    <main className="flex relative min-h-screen flex-col gap-y-16 items-center p-8 md:p-24 bg-gray-2">

      <div className="fixed py-6 top-0 w-full bg-gray-4">
        <p className="my-auto font-extrabold text-center text-2xl text-lime-500">buildbox</p>
        <p className="font-light text-neutral-500 text-center text-xs">WEB CHALLENGE</p>
      </div>

      <div className="w-full flex flex-col gap-y-16">

        <PostForm postSubmitedHandler={postSubmitedHandler}/>

        <div id="feed" className="mx-auto flex flex-col w-full md:w-2/5">
            <p className="text-gray-0 text-sm font-bold mb-2">Feed</p>
            <div className="flex flex-col gap-y-4">
              { posts.map(post => <FeedPost post={post} postDeletedHandler={postDeletedHandler} key={post.id}/>) }
            </div>
        </div>
      </div>
    </main>
  );
}
