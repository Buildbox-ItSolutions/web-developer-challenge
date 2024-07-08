import * as S from './CardPostStyles';
import buildboxLogo from '../../assets/buildbox_it_solutions_logo.jpg';
import AvatarPicture from '../Picture/AvatarPicture';
export default function CardPost() {
    const DEFAULT_PICTURE = buildboxLogo;
    return (
        <>
            <S.Card>
                <S.RemoveIcon />
                <S.CardWrapper>
                    <AvatarPicture src={DEFAULT_PICTURE} />
                    <S.CardContent>
                        <S.Message>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum earum, iusto autem cupiditate possimus nam alias inventore fugit quas quo ex impedit maxime.
                        </S.Message>
                        <S.CardUser>
                            <span>Enviado por</span>
                            <span>Manuela Oliveira</span>
                        </S.CardUser>
                    </S.CardContent>
                </S.CardWrapper>
            </S.Card>
        </>
    )
}