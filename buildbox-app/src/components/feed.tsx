import { PostData } from '../@types'
import { usePosts } from '../contexts/PostsContext'
import Post from './post'
import styles from '../styles/feed.module.css'

const Feed = () => {
  const posts = usePosts()
  const listOfPosts = posts.map(
    (post: PostData, index: number): JSX.Element => (
      <Post data={post} index={index} key={index.toString()} />
    )
  )

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
