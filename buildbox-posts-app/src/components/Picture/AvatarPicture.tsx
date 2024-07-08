import React from 'react';
import * as S from '../indexStyles';

type AvatarPictureProps = {
    src: string,
}
const AvatarPicture: React.FC<AvatarPictureProps> = ({src}) => {
    return (
        <div>
            <S.ImgContainer>
                <S.BtnAvatar>
                    <S.ImgAvatar src={src}/>
                </S.BtnAvatar>
            </S.ImgContainer>
        </div>
    )
}

export default AvatarPicture;
