import Image from 'next/image'
import { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import PostsContext from '../../../shared/contexts/posts'
import { PostProps } from '../../../shared/interfaces/post'
import { PostCardContainer } from './style'

interface PostCardProps {
  post: PostProps
}

export default function PostCard({ post }: PostCardProps) {
  const { posts, setPosts } = useContext(PostsContext)

  const loaderImageProp = ({ src }: { src: string }) => {
    return src
  }

  function deletePost() {
    const newPosts = posts.filter((actualPost) => {
      return actualPost.id !== post.id
    })

    setPosts(newPosts)

    toast.error('Publicação excluida com sucesso!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    })
  }

  return (
    <PostCardContainer>
      <div className="closeButtonArea" onClick={deletePost}>
        <Image
          src="/delete.png"
          alt="close button"
          width="20px"
          height="20px"
        />
      </div>
      <div className="cardArea">
        <div className="imageArea">
          <Image
            src={post.image}
            loader={loaderImageProp}
            alt="Post image"
            width="88px"
            height="88px"
            className="imagePost"
          />
        </div>
        <div className="textArea">
          <h1 className="message">{post.message}</h1>
          <div>
            <h6>Enviado por</h6>
            <h4 className="name">{post.name}</h4>
          </div>
        </div>
      </div>
      <ToastContainer limit={3} />
    </PostCardContainer>
  )
}
