import * as S from './styles'
import { FiTrash } from 'react-icons/fi'
import { IntProst } from 'components/Main'
interface ShowPostsProps {
  item: IntProst
  deletPostItemProps: IntProst
}
const ShowPosts = ({ item, deletPostItemProps }: ShowPostsProps) => {
  const deletPostItem = () => {
    deletPostItemProps(item)
  }

  return (
    <S.Wrapper>
      <S.Image
        src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        alt=""
      />
      <S.Box>
        <S.Text>{item.mensagem}</S.Text>
        <S.EniadoPor>
          <p>Enviado por</p>
          <h2>{item.name}</h2>
        </S.EniadoPor>
      </S.Box>
      <div>
        <a onClick={deletPostItem}>
          <FiTrash />
        </a>
      </div>
    </S.Wrapper>
  )
}

export default ShowPosts
