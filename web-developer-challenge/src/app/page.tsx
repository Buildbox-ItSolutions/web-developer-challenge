"use client"
import CreatePost from "@/components/CreatePost/CreatePost";
import { styled } from "styled-components";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <MainContent>
        <CreatePost></CreatePost>
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
