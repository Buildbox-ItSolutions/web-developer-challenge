'use client';

import { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

import * as S from '../styles';

export const SimpleButton = (): ReactElement => {
	const [isDisabled, setIsDisabled] = useState(true);

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

	useEffect(() => {
    isButtonDisabled();
  });

	return (
		<S.SimpleButton
			type='submit'
			title='Publicar Post'
			aria-label='Publicar Post'
			disabled={isDisabled}
			className={isDisabled ? 'bg-white opacity-50 text-formBackground' : '' }
		>
			Publicar
		</S.SimpleButton>
	);
};
