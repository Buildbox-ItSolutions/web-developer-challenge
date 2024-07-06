import * as S from "./styles";
import { PostProps } from "../../types/types";
import useFeed from "../../hooks/useFeed";

export function Post({ id, message, name, imageURL }: PostProps) {
    const { deletePost } = useFeed();

    const handleDeletePost = () => {
        deletePost(id);
    };

    return (
        <S.Container>
            <S.CloseButton onClick={handleDeletePost} />

            <S.Image $src={imageURL} />
            <S.Content>
                <S.Message>{message}</S.Message>
                <S.AuthorLabel>Enviado por</S.AuthorLabel>
                <S.Author>{name}</S.Author>
            </S.Content>
        </S.Container>
    );
}
