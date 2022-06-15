import Post from './post'
import styles from '../styles/feed.module.css'
import { usePosts } from '../contexts/PostsContext'

const Feed = () => {
  const posts = usePosts()
  const listOfPosts = posts.map((post: any, index: Number) => (
    <Post data={post} index={index} key={index} />
  ))

  return (
    <div className={styles.feedContainer}>
      {posts.length > 0 && (
        <>
          <p className={styles.feedTitle}>Feed</p>
          {[...listOfPosts].reverse()}
        </>
      )}
    </div>
  )
}

export default Feed
