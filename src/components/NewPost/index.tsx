import React from "react";
import * as S from './styles'

export function NewPost() {
    return(
        <S.FormWrapper>
            <S.UploadPhoto 
                type='file'
            />
            <S.EnterName 
                type='text'
                placeholder='Digite seu nome'
            />
            <S.EnterMessage
                placeholder="Mensagem" 
            
            />
            <S.ButtonsWrapper>
                <S.DiscartButton>Descartar</S.DiscartButton>
                <S.PublishButton>Publicar</S.PublishButton>
            </S.ButtonsWrapper>
        </S.FormWrapper>
    )
}