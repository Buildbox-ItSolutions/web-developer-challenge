import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import avatarIcon from '../../assets/image.svg';
import { AvatarContainer, LoadingAvatar, UploadAvatar } from './styles';

interface AvatarProps {
  onFileUploaded: (file: File) => void;
  description?: string;
  multiple?: boolean;
  avatar?: File;
  name?: string;
}


export function Avatar({ onFileUploaded,
  name,
  avatar,
  multiple = false,}: AvatarProps) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
      onFileUploaded(acceptedFiles[0]);
    }, [onFileUploaded]);
  
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: {
        'image/png': ['.png', '.jpg', '.jpeg'],
      }
    });
  
    return (
      <AvatarContainer {...getRootProps()}>
         {avatar ? (
          <>
            <input {...getInputProps()} name={name} multiple={multiple} />
            <UploadAvatar src={URL.createObjectURL(avatar)} alt="1" />
          </>
        ) : (
          <LoadingAvatar src={avatarIcon} alt="Avatar do usuario" />
        )}
      </AvatarContainer>
    )
}
