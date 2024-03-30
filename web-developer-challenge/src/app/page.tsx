"use client"
import CreatePost from "@/components/CreatePost/CreatePost";
import Feed from "@/components/Feed/Feed";
import { usePostStore } from "@/db/dbZustand";
import { styled } from "styled-components";

export default function Home() {

  const { posts, addPost } = usePostStore()

  return (
    <main className="min-h-screen min-w-screen">
      <MainContent>
        <CreatePost createPost={addPost}></CreatePost>
        <Feed posts={posts} ></Feed>
      </MainContent>
    </main>
  );
}


const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding: 40px 100px;
`
