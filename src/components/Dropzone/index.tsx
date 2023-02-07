import React, { useCallback } from 'react';

import { useDropzone } from 'react-dropzone';

import iconPhotoUpload from "../../assets/icons/icon-photo-upload.svg";

import { Container, ImgIconPhotoUpload, PhotoBase } from './styles';

interface DropzoneProps  {
	onFileUploaded: (file: File) => void ;
	description?: string;
	multiple?: boolean;
	photo?: File;
	name?: string;
};

const Dropzone: React.FC<DropzoneProps> = ({ 
	onFileUploaded, 
	name, 
	photo,
	multiple = false
}) => {

	const onDrop = useCallback((acceptedFiles: any) => {
		const file = acceptedFiles[0];
		onFileUploaded(file);
	}, [onFileUploaded]);

	const { getRootProps, getInputProps } = useDropzone({ 
		onDrop,
		accept: {
			'image/png': ['.png', '.jpg', '.jpeg'],
		}
	})    

	return (
		<Container {...getRootProps()} >
			<input {...getInputProps()} 
				name={name}
				multiple={multiple}
			/>

			{photo
				? (
					<PhotoBase>
						<img src={URL.createObjectURL(photo)} alt='1' />
					</PhotoBase>
				)
				: (
					<ImgIconPhotoUpload
						src={iconPhotoUpload}
						alt='Ícone photo upload'
					/>
				)
			}
		</Container>
	)
};

export default Dropzone; 