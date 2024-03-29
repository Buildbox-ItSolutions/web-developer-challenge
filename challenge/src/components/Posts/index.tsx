import { PostBox, DeleteIcon, PostContent, PostTextBox } from "./style";
import Delete from '../../assets/delete.svg'
import UserImage from '../../assets/user-image.png'

const Posts = () => {
  return (
    <PostBox>
      <DeleteIcon>
        <img src={Delete} alt="" />
      </DeleteIcon>
      <PostContent>
        <img src={UserImage} alt="" />
        <PostTextBox>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.</p>
          <h3>Enviado por</h3>
          <h2>Manuela Oliveira</h2>
        </PostTextBox>
      </PostContent>
    </PostBox>
  )
}

export default Posts;