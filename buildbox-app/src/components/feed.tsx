import Post from './post'
import styles from '../styles/feed.module.css'

const Feed = () => {
  return (
    <div className={styles.feedContainer}>
      <p className={styles.feedTitle}>Feed</p>
      <Post />
      <Post />
    </div>
  )
}

export default Feed
