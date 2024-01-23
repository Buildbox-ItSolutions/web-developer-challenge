import { PostsProps } from '@/pages'
import Image from 'next/image'
import { CloseButton, Content, Detail, PostContainer } from './style'

interface PostProp {
  post: PostsProps
  remove: (id: string) => void
}

export default function Post({ post, remove }: PostProp) {
  return (
    <PostContainer>
      <Image src={post.image} width={100} height={100} alt="Imagem" />
      <CloseButton>
        <button onClick={() => remove(post.id)}>
          <i className="ph ph-x-circle"></i>
        </button>
      </CloseButton>
      <Content>
        <p>{post.comment}</p>
        <Detail>
          <span>Enviado por</span>
          <p>{post.name}</p>
        </Detail>
      </Content>
    </PostContainer>
  )
}
