import { Container, Details, ButtonCloseContainer } from "./style"
import deleteIcon from '../../assets/delete.svg'
import { IoMdClose } from 'react-icons/io'
import { useContext } from "react"
import { ModalDeleteContext } from "../../providers/ModelDeletePost"
import postImage from '../../assets/postImage.svg'


interface PostProps{
    post: PostData,
}

interface PostData{
    name:string,
    message:string,
    image?:string,
    id:number
}
export const Post = ({ post}:PostProps) => {

  const { settingActualDeleted } = useContext(ModalDeleteContext)
  return (
    <Container>
        <ButtonCloseContainer> 
            <div>
                <IoMdClose onClick={()=> settingActualDeleted(post.id)}/>
            </div>
        </ButtonCloseContainer>
        <Details>
            <img src={post.image?.length !== 0 ? post.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="post" />

            <div>
                <p>{post.message}</p>
                <h6>Enviado por</h6>
                <h3>{post.name}</h3>
            </div>
        </Details>
    </Container>
  )
}
