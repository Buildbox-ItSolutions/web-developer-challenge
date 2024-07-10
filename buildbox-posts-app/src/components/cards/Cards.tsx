import { PostProps } from '../../types/Post';
import * as S from './CardsStyles';
import CardPost from './CardPost';


export default function Cards({posts}: { posts: PostProps[] }) {
    
    return (
        <>
            <S.CardPostContainer>
                <S.Feed>Feed</S.Feed>
                {posts.map((post: PostProps) => (
                    <CardPost
                        key={post.id}
                        post={post}
                    />
                ))}
            </S.CardPostContainer>
        </>
    )
}