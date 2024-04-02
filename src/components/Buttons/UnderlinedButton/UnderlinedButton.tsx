'use client';

import { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthorState } from '@/features/author/authorSlice';
import { RootState } from '@/store/store';

import * as S from '../styles';

export const UnderlinedButton = (): ReactElement => {
  const [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();
  const imageUrl = useSelector((state: RootState) => state.author.authorImage);
  const authorName = useSelector((state: RootState) => state.author.authorName);
  const message = useSelector((state: RootState) => state.author.message);

  const isButtonDisabled = () => {
    if (!imageUrl || !authorName || !message) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleClick = () => {
    dispatch(clearAuthorState());
  };

  useEffect(() => {
    isButtonDisabled();
  });

  return (
    <S.UnderlinedButton
      onClick={isDisabled ? () => {} : handleClick}
      className={isDisabled ? 'cursor-default' : ''}
    >
      Descartar
    </S.UnderlinedButton>
  );
};
