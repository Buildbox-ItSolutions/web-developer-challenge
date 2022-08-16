import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import Delete from '../../assets/delete.png';
import { postsListState } from '../../atoms/postList';
import { Container, TextSection } from './styles';

interface IPostProps {
    image: string;
    name: string;
    message: string;
    id: string;
}

const Post = ({ image, name, message, id }: IPostProps) => {
    const setPostList = useSetRecoilState(postsListState);

    const handleDeletePost = useCallback(() => {
        setPostList((postList) => [
            ...postList.filter((item) => item.id !== id),
        ]);
    }, [id, setPostList]);

    return (
        <Container>
            <img src={image} alt={`${name} picture`} />
            <TextSection>
                <p>{message}</p>
                <strong>Enviado por</strong>
                <span>{name}</span>
            </TextSection>
            <button type="button" onClick={handleDeletePost}>
                <img src={Delete} alt="Delete icon" />
            </button>
        </Container>
    );
};

export default Post;
