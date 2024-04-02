'use client';

import Image from "next/image";

import * as S from './styles';

type PostProps = {
  authorImage: string;
  authorName: string;
  message: string;
  handleClick: () => void;
};

export const Post = ({
  authorImage,
  authorName,
  message,
  handleClick
}: PostProps) => {
  return (
    <S.MainContainer>
      <S.IconContainer>
        <Image
          src={'/assets/images/posts/x.svg'}
          alt='Deletar Post'
          title='Deletar Post'
          height={20}
          width={20}
          priority
          quality={100}
          onClick={handleClick}
          className="cursor-pointer"
        />
      </S.IconContainer>

      <S.Content>
        <S.AuthorImageSection>
          <Image
            src={authorImage}
            alt='Imagem do Autor'
            title='Imagem do Autor'
            height={80}
            width={80}
            priority
            quality={100}
            className='w-full h-full object-cover'
          />
        </S.AuthorImageSection>

        <S.MessageSection>
          <S.Message>{message}</S.Message>

          <S.AuthorSection>
            <S.AuthorLabel>Enviado por</S.AuthorLabel>

            <S.AuthorName>{authorName}</S.AuthorName>
          </S.AuthorSection>
        </S.MessageSection>
      </S.Content>
    </S.MainContainer>
  );
};
