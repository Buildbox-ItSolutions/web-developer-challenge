import * as S from './CardsStyles';
import CardPost from './CardPost';
export default function Cards() {
    return (
        <>
            <S.CardPostContainer>
                <S.Feed>Feed</S.Feed>
                <CardPost />
                <CardPost />
            </S.CardPostContainer>
        </>
    )
}