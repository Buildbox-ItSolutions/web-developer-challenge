'use client';

import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthorImage } from '@/features/author/authorSlice';
import { RootState } from '@/store/store';
import Image from 'next/image';

import * as S from '../styles';

export const ImageInput = () => {
  const [fileInputKey, setFileInputKey] = useState(0);
  const dispatch = useDispatch();
  const imageUrl = useSelector((state: RootState) => state.author.authorImage);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageURL = reader.result as string;
      if (imageURL) {
        dispatch(setAuthorImage(imageURL));
        setFileInputKey(prevState => prevState += 1);
      }
    }

    if (image) reader.readAsDataURL(image);
  };

  const handleImageDeletion = () => dispatch(setAuthorImage(''));

  return (
    <S.ImageInputMainContainer>
      <S.ImageInputSection htmlFor={'authorImage'}>
        <Image
          src={imageUrl || '/assets/images/imageInput/border.svg'}
          alt='Selecione uma Imagem'
          title='Selecione uma Imagem'
          height={88}
          width={88}
          priority
          quality={100}
          className='w-full h-full object-cover'
        />

        <input
          key={fileInputKey}
          type='file'
          name='authorImage'
          id='authorImage'
          accept='image/*'
          onChange={handleImageChange}
          className='hidden'
        />

        <Image
          src={'/assets/images/imageInput/icon.svg'}
          alt='Selecione uma Imagem'
          title='Selecione uma Imagem'
          height={24}
          width={24}
          priority
          quality={100}
          className={imageUrl ? 'hidden' : 'absolute'}
        />
      </S.ImageInputSection>

      {imageUrl && (
        <Image
          src={'/assets/images/imageInput/trash.svg'}
          alt='Deletar Imagem'
          title='Deletar Imagem'
          height={24}
          width={24}
          priority
          quality={100}
          className='cursor-pointer'
          onClick={handleImageDeletion}
        />
      )}
    </S.ImageInputMainContainer>
  );
};
