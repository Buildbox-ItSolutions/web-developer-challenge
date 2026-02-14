import logo from "./assets/bx-logo.png"
import { Post } from "./components/Post";
import { FormPost } from "./components/FormPost";
import { useEffect, useState } from "react";
import { api } from "./lib/axios";
import { styled } from "./style";

type PostProps = {
  avatar: string;
  name: string;
  content: string;
}


export const Header = styled("header", {
  height: "5.75rem",
  padding: "1.5rem 39.5rem 1.5rem 39.5rem",
  backgroundColor: "#2b2b2b",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const Img = styled("img", {
  height: "45px",
});
export const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  alignItems: "center",
  justifyContent: "center",
  margin: "41px 0 41px 0",
});

export function App() {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function handleSubmitPost(date: PostProps) {
    setPosts((pre) => {
      return [...pre, date]
    })
  }

  function handleDiscard(postToRemove: { avatar: string; name: string; content: string; }) {
    setPosts((prev) => prev.filter(post => post !== postToRemove));
  }
  return (
    <>
      <Header>
        <Img src={logo} alt="Logo BuildBox" />
      </Header>
      <Container>
        <FormPost onPosts={handleSubmitPost} />
        {posts && posts.map((post, index) => (
          <Post avatar={post.avatar} content={post.content} name={post.name} key={index} onDelete={() => handleDiscard(post)} />
        ))}
      </Container>

    </>
  )
}


