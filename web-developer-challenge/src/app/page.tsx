"use client"
import PostCard from "@/components/PostCard/PostCard";
import { styled } from "styled-components";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <MainContent>
        <PostCard></PostCard>
      </MainContent>
    </main>
  );
}


const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 40px 100px;
`
