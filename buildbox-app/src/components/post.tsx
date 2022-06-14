import Image from 'next/image'
import styles from '../styles/post.module.css'

import photo from '../../public/me.jpeg'
import deleteImage from '../../public/delete.png'

const Post = () => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postLayout}>
        <div className={styles.photoContainer}>
          <Image src={photo} width={88} height={88} objectFit="cover" />
        </div>
        <div className={styles.postDetails}>
          <p className={styles.postMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            ultricies sodales purus sed tincidunt. Morbi sollicitudin ipsum
            tortor, at pretium nisl maximus nec. Ut vel faucibus mauris. Integer
            consectetur tincidunt lobortis. Ut eu volutpat elit, vitae dapibus
            est.
          </p>
          <span className={styles.sentBy}>Enviado por</span>
          <span className={styles.postAuthor}>Pedro Gabriel</span>
        </div>
      </div>
      <span className={styles.deletePost}>
        <Image src={deleteImage} width={20} height={20} />
      </span>
    </div>
  )
}

export default Post
