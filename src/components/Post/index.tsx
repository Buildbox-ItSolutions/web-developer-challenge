import React from 'react';
import * as S from './styles'
import ImgPost from '../../assets/photo-base@3x.jpg'



 interface PostProps {
   description: string
   name: string
   onDelete: Function
   postId: number
 }

 const Post: React.FC<PostProps> = ({ description, name, onDelete, postId }) => {
   return (
    <S.Container>
      {/* <button className="buttonOff" onClick={() => onDelete(postId)} >
        <img src={Button} alt="button"  />
      </button> */}
      <S.Delete onClick={()=> onDelete(postId)}/>
      <img src={ImgPost} alt="Post Img"  />
      <p> {description} </p>
      <h6>Enviado por</h6>
      <h5>{name}</h5>
    </S.Container> 
   )
 }
 export default Post
