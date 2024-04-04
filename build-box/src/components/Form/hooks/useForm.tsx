import { useState } from 'react';

export function useForm() {
	const [image, setImage] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	return {
		image,
		setImage,
		name,
		setName,
		message,
		setMessage,
	};
}
