import { CreatePost } from './components/CreatePost'
import { Header } from './components/Header'
import { NoPostsFound } from './components/NoPostsFound'
import { Post } from './components/Post'

import { usePostsLocalStorageContext } from './hooks/usePostsLocalStorage'
import { AppContainer } from './style'

export function App() {
  const { posts, deletePost } = usePostsLocalStorageContext()

  return (
    <AppContainer>
      <Header />
      <CreatePost />
      {posts.length === 0 ? (
        <NoPostsFound />
      ) : (
        <>
          <h2>Feed</h2>
          {posts
            .slice()
            .reverse()
            .map((post, index) => (
              <Post
                key={index}
                img={post.image}
                author={post.author}
                text={post.text}
                onDeletePost={() => deletePost(post)}
              />
            ))}
        </>
      )}
    </AppContainer>
  )
}
