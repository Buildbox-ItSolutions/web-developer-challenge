import styled, { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { Post } from "./components/Post"
import { useState } from "react"
import { Note } from "@phosphor-icons/react"



export function App() {
  const [posts, setPosts] = useState<{ name: string; comment: string; date: Date }[]>([])

  const handleAddPost = (name: string, comment: string) => {
    const newPost = {name, comment, date: new Date() };
    setPosts([...posts, newPost])
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <ContentContainer>
        
      <Form onPostAdd={handleAddPost}/>
        {posts.length <= 0 ? (
          <section className="not-post">
            <Note size={50} />
            <p>
              <span>Ainda não há publicações</span><br />
              Seja a primeira pessoa a postar
            </p>
          </section>
        ) : (
          <section className="teste">
            <h3>Feed</h3>  
          <div className="post-area">
            {posts.map((post, index) => (
              <Post
                key={index}
                name={post.name}
                comment={post.comment}
                publishedAt={new Date()}
              />
            ))}
          </div>
          </section>
        )}
      </ContentContainer>

      <GlobalStyle />
    </ThemeProvider>
  )
}

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .not-post {
    width: 32.5rem;
    max-width: 100%;
    margin-top: 5rem;
    /* margin: 5rem auto 0; */

    text-align: center;
    font-size: 1rem;
    line-height: 1.6;

    color: ${props => props.theme["post-text"]};
  }

  .post-area {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
  }

  .teste > h3 {
    width: 32.5rem;
    max-width: 100%;

    margin-top: 3.5rem;
    margin-bottom: 0.5rem;

    font-size: 0.875rem;
    line-height: 1.8;
    font-weight: 500;
    /* margin: 0 auto; */

    color: ${props => props.theme["post-name"]};
  }
`