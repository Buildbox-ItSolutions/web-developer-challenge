"use client"
import CreatePost from "@/components/CreatePost/CreatePost";
import Feed from "@/components/Feed/Feed";
import PostCard from "@/components/PostCard/PostCard";
import { Post, getPosts } from "@/db/db";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function Home() {

  const [posts, setPosts] = useState<Post[]>([])
  const [forceRender, setForceRender] = useState(false); 

  const reRender = () => {
    setForceRender(!forceRender);
  }

  
  useEffect(() => {
    let p = getPosts()
    setPosts(p)

  },[forceRender])

  return (
    <main className="min-h-screen min-w-screen">
      <MainContent>
        <CreatePost reRender={reRender}></CreatePost>
        <Feed posts={posts}></Feed>
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
