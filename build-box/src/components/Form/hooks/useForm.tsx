import React, { useState } from 'react';

export function useForm() {
	const [image, setImage] = useState('');
	const [author, setAuthor] = useState('');
	const [message, setMessage] = useState('');

	function discard(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		setImage('');
		setAuthor('');
		setMessage('');
	}

	function handleImage(files: FileList | null) {
		if (!files) return;
		const reader = new FileReader();
		reader.onload = (e) => {
			setImage(e.target?.result as string);
		};
		reader.readAsDataURL(files[0]);
	}

	return {
		image,
		setImage,
		author,
		setAuthor,
		message,
		setMessage,
		discard,
		handleImage,
	};
}
