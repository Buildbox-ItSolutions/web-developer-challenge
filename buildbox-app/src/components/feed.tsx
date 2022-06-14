import Posts from './posts'
import styles from '../styles/feed.module.css'

const Feed = () => {
  return (
    <div className={styles.feedContainer}>
      <p className={styles.feedTitle}>Feed</p>
      <Posts />
    </div>
  )
}

export default Feed
