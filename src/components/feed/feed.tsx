import * as S from "./styles";
import { ImageComponentCard } from '../image/imageComponent';
import {IconTrash} from '../../assets/images/trash'
import {DeleteIcon} from '../../assets/images/delete'
import {ButtonClosed} from "../buttons/buttonClose";
import {ButtonPublish} from '../buttons/buttonPublish'
import {ButtonDiscard} from '../buttons/buttonDiscard'
import {usePost} from '../../hooks/usePost'
import {useChangeImage ,images} from '../../hooks/useChangeImage'
import {MesageParagraph, WhoParagraph, NameParagraph} from '../paragraph/paragraph'



export const FeedPosts = () => {
    const { post, deletePost, nameInput, setNameInput, messageInput, setMessageInput, clearInputs, handlePublish } = usePost();
    const { currentImageIndex, handleTrashClick } = useChangeImage();


    return(
        <>
            <S.InputPost>
                <S.CardDiv>
                    <ImageComponentCard src={images[currentImageIndex].url} alt="Imagem aleatória/ Random image" />
                    <IconTrash onClick={handleTrashClick} />
                </S.CardDiv>

                <S.FirstInputComponent 
                    placeholder="Digite seu nome" 
                    required 
                    title="Este campo é obrigatório"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                />
                <S.SecondInputComponent 
                    placeholder="Mensagem" 
                    maxLength={255} 
                    required 
                    title="Este campo é obrigatório"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                />

                <S.CardDivButtons>
                    <ButtonDiscard onClick={clearInputs}>
                        Descartar
                    </ButtonDiscard>
                    <ButtonPublish onClick={handlePublish}>
                        Publicar
                    </ButtonPublish>
                </S.CardDivButtons>
            </S.InputPost>

            <S.DivFeed>
                <S.StyledH3>Feed</S.StyledH3>
            </S.DivFeed>

            {post.length > 0 && post.map((item) => {

                return (
                    <S.PostIncluded key={item.id}>
                        <S.DivIcon>
                            <ButtonClosed onClick={() => deletePost(item.id)}>
                                <DeleteIcon />
                            </ButtonClosed>
                        </S.DivIcon>
                        <S.CardDiv>
                            <S.DivImage>
                                {item.imageIndex !== undefined && (
                                    <ImageComponentCard src={images[item.imageIndex].url} alt="Imagem aleatória/ Random image" />
                                )}
                            </S.DivImage>

                            <S.DivInformation>
                                <MesageParagraph>
                                    {item.message}
                                </MesageParagraph>
                                <WhoParagraph>
                                    Enviado por: 
                                </WhoParagraph>
                                <NameParagraph>
                                    {item.name}
                                </NameParagraph>
                            </S.DivInformation>
                        </S.CardDiv>
                    </S.PostIncluded>
                );
})}
        </>
    )
}