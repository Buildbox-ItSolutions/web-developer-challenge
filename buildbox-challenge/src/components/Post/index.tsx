import { Container, Details, ButtonCloseContainer } from "./style"
import deleteIcon from '../../assets/delete.svg'
import { IoMdClose } from 'react-icons/io'
import { useContext } from "react"
import { ModalDeleteContext } from "../../providers/ModelDeletePost"
import postImage from '../../assets/postImage.svg'
import { GrEdit } from 'react-icons/gr'
import { ModalEditContext } from "../../providers/ModalEditPost"
import { useEffect } from "react"


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

  const { settingActualEdit, actualEdit } = useContext(ModalEditContext)


  return (
    <Container>
        <ButtonCloseContainer> 
            <div className="edit_div">
                <GrEdit onClick={()=> settingActualEdit(post.id)} className="edit_button"/>
            </div>
            <div className="remove_div">
                <IoMdClose onClick={()=> settingActualDeleted(post.id)} className="remove_button"/>
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
