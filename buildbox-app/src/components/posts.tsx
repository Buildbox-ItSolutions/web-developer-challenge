import Image from 'next/image'
import styles from '../styles/post.module.css'
import { usePosts } from './PostsContext'

import deleteImage from '../../public/delete.png'

const Posts = () => {
  const posts = usePosts()

  return posts.map((post: any) => (
    <div className={styles.postContainer}>
      <div className={styles.postLayout}>
        <div className={styles.photoContainer}>
          <Image src={post.photo} width={88} height={88} objectFit="cover" />
        </div>
        <div className={styles.postDetails}>
          <p className={styles.postMessage}>{post.message}</p>
          <span className={styles.sentBy}>Enviado por</span>
          <span className={styles.postAuthor}>{post.author}</span>
        </div>
      </div>
      <span className={styles.deletePost}>
        <Image src={deleteImage} width={20} height={20} />
      </span>
    </div>
  ))
}

export default Posts
