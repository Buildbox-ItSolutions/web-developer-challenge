import React from 'react';
import * as S from '../indexStyles';

const NoAvatarPicture: React.FC = () => {
    return (
        <div>
            <S.NoImgContainer>
                <S.NoBtnAvatar>
                    <S.NoImgAvatar />
                </S.NoBtnAvatar>
            </S.NoImgContainer>
        </div>
    )
}

export default NoAvatarPicture;
