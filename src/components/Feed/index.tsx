import { useRecoilValue } from 'recoil';
import { postsListState } from '../../atoms/postList';
import Post from '../Post';
import { Container } from './styles';

const Feed = () => {
    const postsList = useRecoilValue(postsListState);

    return (
        <Container>
            {postsList &&
                postsList.map((item, index) => (
                    <Post key={item.id} {...item} />
                ))}
        </Container>
    );
};

export default Feed;
