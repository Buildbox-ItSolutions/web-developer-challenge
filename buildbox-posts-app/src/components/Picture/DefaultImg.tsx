import React from 'react';
import * as S from '../indexStyles';

const DefaultPicture: React.FC = () => {
    return (
        <div>
            <S.ImgContainer>
                <S.BtnAvatar>
                    <S.ImgAvatar />
                </S.BtnAvatar>
            </S.ImgContainer>
        </div>
    )
}

export default DefaultPicture;
