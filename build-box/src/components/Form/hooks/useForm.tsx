import React, { useState } from 'react';

export function useForm() {
	const [image, setImage] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	function discard(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		setImage('');
		setName('');
		setMessage('');
	}

	function publish(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		console.log('Publishing...', image, name, message);
	}

	return {
		image,
		setImage,
		name,
		setName,
		message,
		setMessage,
		discard,
		publish,
	};
}
