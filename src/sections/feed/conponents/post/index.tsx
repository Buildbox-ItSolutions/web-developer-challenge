import { DeleteIcon, PostAuthorContainer, PostContainer, PostContentContainer, PostImage, PostMessage, PostMessageContainer, SendBy, SendBySmall } from "./styles";
import deleteIcon from "../../../../assets/delete.svg"
import postImage from "../../../../assets/photo-base.jpg"


export default function Post() {
    return <PostContainer>
        
        <DeleteIcon src={deleteIcon} />
        
        <PostContentContainer>
            <PostImage 
                src={postImage}
                // srcSet="img/photo-base@2x.png 2x,
                //         img/photo-base@3x.png 3x"
            />
            <PostMessageContainer>
                <PostMessage>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.
                </PostMessage>
                <PostAuthorContainer>
                    <SendBySmall>Enviado por</SendBySmall>
                    <SendBy>Manuela Oliveira</SendBy>
                </PostAuthorContainer>
            </PostMessageContainer>
        </PostContentContainer>
       
    </PostContainer>
}