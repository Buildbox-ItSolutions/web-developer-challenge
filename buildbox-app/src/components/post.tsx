import { PostProps } from '../@types'
import { useDispatchPosts } from '../contexts/PostsContext'
import Image from 'next/image'
import styles from '../styles/post.module.css'
import deleteImage from '../../public/delete.png'

const Post = (props: PostProps) => {
	const { photo, message, author } = props.data
	const { index } = props
	const dispatch = useDispatchPosts()

	function handleDeletePost(index: number) {
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
						objectFit='cover'
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
				<Image src={deleteImage} width={20} height={20} />
			</span>
		</div>
	)
}

export default Post
