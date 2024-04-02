'use client';

import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthorName } from '@/features/author/authorSlice';
import { RootState } from '@/store/store';

import * as S from '../styles';

export const TextInput = () => {
  const dispatch = useDispatch();
  const authorName = useSelector((state: RootState) => state.author.authorName);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    dispatch(setAuthorName(name));
  };

  return (
    <S.InputSection>
      <S.Input
        type='text'
        id='authorName'
        name='authorName'
        value={authorName}
        placeholder='Digite seu nome'
        onChange={handleNameChange}
      />
    </S.InputSection>
  );
};
