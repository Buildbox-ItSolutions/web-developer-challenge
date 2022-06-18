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
      <>
        <p className={styles.feedTitle}>
          {posts.length > 0 ? 'Feed' : 'Nenhuma postagem'}
        </p>
        {[...listOfPosts].reverse()}
      </>
    </div>
  )
}

export default Feed
