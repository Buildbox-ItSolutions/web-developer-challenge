import Form from "@/components/Form"
import Header from "@/components/Header"
import Post from "@/components/Post"
import { useCallback, useState } from "react"
import { Container } from "./home.style"

/** TO-DO
 * Persistencia de dados em banco e cache com Axios e ReactQuery
 */

export interface PostsProps {
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

  const handleRemovePost = useCallback((id: string) => {
    setPosts(state => state.filter(post => post.id !== id))
  }, [posts])

  return (
    <main>
      <Header />
      <Container>
        <Form onSubmit={handleFormSubmit} />
        {posts.map(post => <Post key={post.id} post={post} remove={handleRemovePost} />)}
      </Container>
    </main>
  )
}
