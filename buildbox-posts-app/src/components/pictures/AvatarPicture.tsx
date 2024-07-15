import React from 'react';
import * as S from './AvatarPictureStyle';

type AvatarPictureProps = {
    src: string,
}
const AvatarPicture: React.FC<AvatarPictureProps> = ({src}) => {
    return (
        <div>
            <S.ImgContainer>
                    <S.ImgAvatar src={src}/>
            </S.ImgContainer>
        </div>
    )
}

export default AvatarPicture;
