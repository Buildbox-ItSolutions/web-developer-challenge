import { ButtonDeleteBox, Container, ImagePost, ImagePostTemplate, PostContent, PostMessage, PostOwnerName, PostOwnerTitle, PostTextContent } from "./Style";
import Delete from "../../assets/delete.svg"

interface CardPostProps {
    name?: string
    image?: string
    message?: string
    index: number;
    deletePost: any;
}

export default function CardPost({name, image, message, index, deletePost}: CardPostProps) {
    console.log(name, image, message)
    return(
        <Container>
            <ButtonDeleteBox>
                <img onClick={() => deletePost(index)} style={{backgroundColor: "var(--grey-2)", cursor: "pointer"}} src={Delete}/>
            </ButtonDeleteBox>

            <PostContent>
                { image !== undefined ?
                    <ImagePost src={image}/>
                :
                    <ImagePostTemplate/>
                }

                    <PostTextContent>
                        <PostMessage style={{backgroundColor: "var(--grey-2)"}}>{message}</PostMessage>

                    <div style={{backgroundColor: "var(--grey-2)"}}>
                        <PostOwnerTitle>Enviado por</PostOwnerTitle>
                        <PostOwnerName>{name}</PostOwnerName>
                    </div>
                    </PostTextContent>
            </PostContent>

            
        </Container>
    )
}