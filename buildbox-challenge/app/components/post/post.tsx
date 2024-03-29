import Image from "next/image";
import Avatar from "../avatar/avatar";
import Card from "../card/card";
import { ButtonClose, PostContent, PostContainer, PostMessage } from "./postStyled";

export interface PostProps {
    id: string,
    name: string
    message: string
    imageUrl: string
}

export interface ExtendedPostProps extends PostProps {
    deletePost: (id: string) => void;
}

const Post = ({id, name, message, imageUrl, deletePost}: ExtendedPostProps) => {
    return ( 
        <PostContainer>
            <ButtonClose onClick={() => deletePost(id)}>
                <Image
                    src="/delete.svg"
                    width={20}
                    height={20}
                    alt="Botão para apagar post" 
                />
            </ButtonClose>
            <Avatar>
                <Image
                    src={imageUrl}
                    alt="Imagem"
                    fill
                />
            </Avatar>

            <PostContent>
                <PostMessage>{message}</PostMessage>
                <div>
                    <p>Enviado por: </p>
                    <p>{name}</p>
                </div>
            </PostContent>
        </PostContainer>
     );
}
 
export default Post;