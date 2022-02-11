import { Container, Details, ButtonCloseContainer } from "./style"
import deleteIcon from '../../assets/delete.svg'
import { IoMdClose } from 'react-icons/io'


interface PostProps{
    post: PostData
}

interface PostData{
    name:string,
    message:string,
    image?:string,
}
export const Post = ({ post }:PostProps) => {
  return (
    <Container>
        <ButtonCloseContainer> 
            <div>
                <IoMdClose onClick={()=>console.log("aaaa")}/>
            </div>
        </ButtonCloseContainer>
        <Details>
            <img src={post.image} alt="post" />

            <div>
                <p>{post.message}</p>
                <h6>Enviado por</h6>
                <h3>{post.name}</h3>
            </div>
        </Details>
    </Container>
  )
}
