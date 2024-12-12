import { DeleteIcon, PostAuthorContainer, PostContainer, PostContentContainer, PostImage, PostMessage, PostMessageContainer, SendBy, SendBySmall } from "./styles";
import deleteIcon from "../../../../assets/delete.svg"
import { IPost, usePostContext } from "../../../../contexts/postContext";

export default function Post({authorName, message, postPhoto, id} : IPost) {

    const {deletePost} = usePostContext()

    return <PostContainer>
        
        <DeleteIcon src={deleteIcon} onClick={() => deletePost(id)} />
        
        <PostContentContainer>
            <PostImage 
                src={postPhoto}
            />
            <PostMessageContainer>
                <PostMessage>
                    {message}
                </PostMessage>
                <PostAuthorContainer>
                    <SendBySmall>Enviado por</SendBySmall>
                    <SendBy>{authorName}</SendBy>
                </PostAuthorContainer>
            </PostMessageContainer>
        </PostContentContainer>
       
    </PostContainer>
}