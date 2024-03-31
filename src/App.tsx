import { CreatePost } from './components/CreatePost'
import { Header } from './components/Header'
import { Post } from './components/Post'

import { usePostsLocalStorageContext } from './hooks/usePostsLocalStorage'
import { AppContainer } from './style'

export function App() {
  const { posts, deletePost } = usePostsLocalStorageContext()

  return (
    <AppContainer>
      <Header />
      <CreatePost />
      <h2>Feed</h2>
      {posts
        .slice()
        .reverse()
        .map((post, index) => {
          return (
            <Post
              key={index}
              img="https://avatars.githubusercontent.com/u/43791636?v=4"
              author={post.author}
              text={post.text}
              onDeletePost={() => deletePost(post)}
            />
          )
        })}
    </AppContainer>
  )
}
