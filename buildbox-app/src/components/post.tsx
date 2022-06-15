import Image from 'next/image'
import styles from '../styles/post.module.css'
import { useDispatchPosts } from './PostsContext'

import deleteImage from '../../public/delete.png'

const Post = (props: any) => {
  const { photo, message, author } = props.data
  const { index } = props
  const dispatch = useDispatchPosts()

  function handleDeletePost(index: any) {
    dispatch({ type: 'DELETE_POST', index })
  }

  return (
    <div className={styles.postContainer}>
      <div className={styles.postLayout}>
        <div className={styles.photoContainer}>
          <Image
            src={photo}
            width={88}
            height={88}
            objectFit="cover"
            unoptimized
          />
        </div>
        <div className={styles.postDetails}>
          <p className={styles.postMessage}>{message}</p>
          <span className={styles.sentBy}>Enviado por</span>
          <span className={styles.postAuthor}>{author}</span>
        </div>
      </div>
      <span
        className={styles.deletePost}
        onClick={() => handleDeletePost(index)}
      >
        <Image src={deleteImage} width={20} height={20} unoptimized />
      </span>
    </div>
  )
}

export default Post
