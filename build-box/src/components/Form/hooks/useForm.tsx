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

	function publish(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		console.log('Publishing...', image, name, message);
	}

	return {
		image,
		setImage,
		author,
		setAuthor,
		message,
		setMessage,
		discard,
		publish,
	};
}
