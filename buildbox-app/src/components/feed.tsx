import Post from './post'
import styles from '../styles/feed.module.css'
import { usePosts } from './PostsContext'

const Feed = () => {
  const posts = usePosts()
  const listOfPosts = [...posts]
    .reverse()
    .map((post: any, index: Number) => (
      <Post data={post} index={index} key={index} />
    ))

  return (
    <div className={styles.feedContainer}>
      {posts.length > 0 && (
        <>
          <p className={styles.feedTitle}>Feed</p>
          {listOfPosts}
        </>
      )}
    </div>
  )
}

export default Feed
