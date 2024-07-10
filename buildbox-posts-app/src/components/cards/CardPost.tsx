import * as S from './CardPostStyles';
import buildboxLogo from '../../assets/buildbox_it_solutions_logo.jpg';
import AvatarPicture from '../pictures/AvatarPicture';
import { PostProps } from '../../types/Post';

export default function CardPost({post}: {post:PostProps}) {
    const DEFAULT_PICTURE = buildboxLogo;
    const {name, message, picture} = post;

    return (
        <>
            <S.Card>
                <S.RemoveIcon />
                <S.CardWrapper>
                    <AvatarPicture src={picture ||DEFAULT_PICTURE} />
                    <S.CardContent>
                        <S.Message>{message}</S.Message>
                        <S.CardUser>
                            <span>Enviado por</span>
                            <span>{name}</span>
                        </S.CardUser>
                    </S.CardContent>
                </S.CardWrapper>
            </S.Card>
        </>
    )
}