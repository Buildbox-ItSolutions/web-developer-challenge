import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage';

import { storage } from '@config/firebase';
import { PostService } from '@services/index';

import { IData } from './types';
import { initialValues } from './constants';
import { usePosts } from '@/global/hooks/usePosts';

export const useSubmitForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(
    null
  );

  const { setIsLoading } = usePosts();

  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: initialValues,
  });

  const { errors, isSubmitting, isValid } = formState;

  const handleSubmitForm = (data: IData) => {
    const payload = {
      name: data.name,
      message: data.message,
      thumbnail: thumbnailUrl,
    };

    setIsLoading(true);
    PostService.registerNewPost(payload);
    reset();
    setThumbnailUrl(null);
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleClearAllFields = () => {
    reset();
    setThumbnailUrl(null);
  };

  const handleDeleteThumbnail = () => setThumbnailUrl(null);

  useEffect(() => {
    const handleUploadFile = () => {
      if (!file) return null;

      const nameUploadFile = new Date().getTime() + file.name;
      const storageRef = ref(storage, nameUploadFile);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is pause');
              break;

            case 'running':
              console.log('Upload is running');
              break;

            default:
              break;
          }
        },
        (error) => {
          console.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(
            (downloadURL) => {
              setThumbnailUrl(downloadURL);
            }
          );
        }
      );
    };

    file && handleUploadFile();
  }, [file]);

  return {
    errors,
    isValid,
    register,
    isSubmitting,
    handleSubmit,
    thumbnailUrl,
    handleChangeFile,
    handleSubmitForm,
    handleClearAllFields,
    handleDeleteThumbnail,
  };
};
