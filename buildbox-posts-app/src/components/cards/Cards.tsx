import { PostProps } from '../../types/Post';
import * as S from './CardsStyles';
import CardPost from './CardPost';


export default function Cards(
    { posts, onRemovePost }: { posts: PostProps[], onRemovePost: (id: string) => void }) {

    return (
        <>
            <S.CardPostContainer>
                <S.Feed>Feed</S.Feed>
                {posts.map((post: PostProps) => (
                    <CardPost
                        key={post.id}
                        onRemovePost={onRemovePost}
                        post={post}
                    />
                ))}
            </S.CardPostContainer>
        </>
    )
}