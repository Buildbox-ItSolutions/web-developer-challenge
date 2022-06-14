import Image from 'next/image'
import styles from '../styles/post.module.css'
import { useDispatchPosts, usePosts } from './PostsContext'

import deleteImage from '../../public/delete.png'

const Posts = () => {
  const posts = usePosts()
  const dispatch = useDispatchPosts()

  function handleDeletePost(index: any) {
    dispatch({ type: 'DELETE_POST', index })
    console.log(index)
  }

  return posts.map((post: any, index: any) => (
    <div className={styles.postContainer} key={index}>
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
      <span
        className={styles.deletePost}
        onClick={() => handleDeletePost(index)}
      >
        <Image src={deleteImage} width={20} height={20} />
      </span>
    </div>
  ))
}

export default Posts
