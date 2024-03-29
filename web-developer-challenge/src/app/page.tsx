"use client"
import CreatePost from "@/components/CreatePost/CreatePost";
import PostCard from "@/components/PostCard/PostCard";
import { styled } from "styled-components";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <MainContent>
        <CreatePost></CreatePost>
        <Feed>
          Feed
          <PostCard></PostCard>
        </Feed>
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

const Feed = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 516px;
`

