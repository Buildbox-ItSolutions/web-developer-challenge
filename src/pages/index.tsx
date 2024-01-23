import Form from "@/components/Form"
import Header from "@/components/Header"
import Post from "@/components/Post"
import { useState } from "react"
import { Container } from "./home.style"

interface PostsProps {
  id: string // Geralmente UUID
  image: string
  name: string
  comment: string
}

export default function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([])

  async function handleFormSubmit(data: any) {
    const newPost = {
      id: new Date().getTime().toString(),
      ...data,
    }

    setPosts(state => [...state, newPost])
  }

  return (
    <main>
      <Header />
      <Container>
        <Form onSubmit={handleFormSubmit} />
        <Post />
      </Container>
    </main>
  )
}
