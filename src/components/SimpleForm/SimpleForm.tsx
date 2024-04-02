'use client';

import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { createPost } from '@/features/posts/postsSlice';
import { clearAuthorState } from '@/features/author/authorSlice';
import { v4 as uuidv4 } from 'uuid';
import { TextArea, TextInput, ImageInput } from '@/components/Inputs';
import { ButtonsContainer, SimpleButton, UnderlinedButton } from '@/components/Buttons';

import * as S from './styles';

export const SimpleForm = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector((state: RootState) => state.author.authorImage);
  const authorName = useSelector((state: RootState) => state.author.authorName);
  const message = useSelector((state: RootState) => state.author.message);

  const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const postId = uuidv4();

		const newPost = {
			id: postId,
			authorImage: imageUrl,
			authorName,
			message
		};

		dispatch(createPost(newPost));
		dispatch(clearAuthorState());
	};

  return (
    <S.MainContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <ImageInput />

        <TextInput />

        <TextArea />

        <ButtonsContainer>
          <UnderlinedButton />

          <SimpleButton />
        </ButtonsContainer>
      </S.FormContainer>
    </S.MainContainer>
  );
};
