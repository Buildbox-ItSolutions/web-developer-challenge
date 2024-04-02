'use client';

import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '@/features/author/authorSlice';
import { RootState } from '@/store/store';

import * as S from '../styles';

export const TextArea = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.author.message);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    dispatch(setMessage(text));
  };

  return (
    <S.InputSection>
      <S.TextArea
        id='message'
        name='message'
        value={message}
        placeholder='Mensagem'
        onChange={handleMessageChange}
      />
    </S.InputSection>
  )
};
