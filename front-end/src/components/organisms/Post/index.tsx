import { XCircle } from 'phosphor-react';
import { useContext } from 'react'
import { PostContext } from '../../../context/PostContext';
import { IPostData } from '../../../interfaces';
import * as P from './styles'
import postPhoto from '/src/assets/photo-base.png'




const Post = ({ id, name, post }: IPostData) => {

  const { deletingPost } = useContext(PostContext)

  const deletePost = () => deletingPost(id)

  return (
    <P.Container>
      <P.Header>
        <XCircle size={26} weight="light" onClick={deletePost} />
      </P.Header>
      <P.ControlContainer>
        <P.LeftCol>
          <img src={postPhoto} alt="" />
        </P.LeftCol>
        <P.RightCol>
          <span>
            {post}
          </span>
          <div className="author">
            <img className='img-corner' src={postPhoto} alt="" />
            <div className="author-info">
              <small>
                Enviado por
              </small>
              <p>{name}</p>
            </div>
          </div>
        </P.RightCol>
      </P.ControlContainer>
    </P.Container>
  )
}

export default Post;