import Form from "@/components/Form"
import Header from "@/components/Header"
import { Container } from "./home.style"

export default function Home() {
  async function handleFormSubmit(data: any) {
    console.log(data)

    await new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000)
    })
  }

  return (
    <main>
      <Header />
      <Container>
        <Form onSubmit={handleFormSubmit} />
        <h1>Hello World</h1>
      </Container>
    </main>
  )
}
