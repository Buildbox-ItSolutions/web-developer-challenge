import * as S from './style'
import { Posts } from "../../interface"
import { DeleteIcon } from '../Icons/DeleteIcon';


interface Props {
  data: Posts,
  action: () => void
}

export const Post: React.FC<Props> = ({data: {image, postData}, action}) => {

  return (
   <S.Wrapper>
    <S.ActionWrapper>
      <S.Button>
        <DeleteIcon onClick={action} />
      </S.Button>
      </S.ActionWrapper>
      <S.ContentWrapper>
        <S.Photo src={image}/>
        <S.PostInfo>
        <S.Message>{postData.message}</S.Message>
          <S.Author>
            <small>Enviado por</small>
            <p>{postData.name}</p>
          </S.Author>
        </S.PostInfo>
      </S.ContentWrapper>
   </S.Wrapper>
  )
}


