import { FC, useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  BixInput,
  BixTextArea,
  BixButton,
  BixCard,
  BixUpload,
  UploadIcons,
} from '@bix/core';

import { CreatePostProps } from './model';
import { CreatePostStyled } from './styles';
import { appErrors } from '@/utils/err';

import icon from '@/assets/image.svg';
import trash from '@/assets/trash.svg';
import { useDispatch } from 'react-redux';
import { Post } from '@/models/posts';
import { addPostAction } from '@/store/actions/posts.actions';

const schema = yup.object().shape({
  name: yup.string().required(appErrors.messages.required),
  message: yup.string().required(appErrors.messages.required),
  preview: yup.string().required(appErrors.messages.required),
});

export const CreatePost: FC<CreatePostProps> = () => {
  const dispatch = useDispatch();
  const [uploaded, setUploaded] = useState(false);

  const {
    register,
    setValue,
    formState: { errors, isValid, isDirty },
    watch,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      message: '',
      preview: '',
    },
    resolver: yupResolver(schema),
  });

  const form = watch();

  useEffect(() => {
    const fields = ['name', 'message', 'preview'];

    fields.forEach((field: any) => register(field));
  }, [register, form]);

  const resetForm = () => {
    reset();
    setUploaded(false);
  };

  const onCreatePost = () => {
    const newPost: Post = {
      author: {
        avatar: form.preview,
        name: form.name,
      },
      message: form.message,
      id: Math.random(),
    };

    dispatch(addPostAction(newPost));
    resetForm();
  };

  const uploadIcons: UploadIcons = {
    upload: icon,
    clear: trash,
  };

  return (
    <CreatePostStyled>
      <BixCard>
        <BixUpload
          preview={form.preview}
          icons={uploadIcons}
          uploaded={uploaded}
          onUpload={(_, preview) => {
            setValue('preview', preview, { shouldValidate: true });
            setUploaded(true);
          }}
          onClear={() => {
            setValue('preview', '', { shouldValidate: true });
            setUploaded(false);
          }}
        />

        <div>
          <BixInput
            placeholder="Digite seu nome"
            maxLength={40}
            block
            value={form.name}
            invalid={!!appErrors.getMessage('name', errors)}
            message={appErrors.getMessage('name', errors)}
            onChange={e => setValue('name', e, { shouldValidate: true })}
          />

          <BixTextArea
            placeholder="Mensagem"
            cols={3}
            rols={3}
            maxLength={167}
            block
            value={form.message}
            invalid={!!appErrors.getMessage('message', errors)}
            message={appErrors.getMessage('message', errors)}
            onChange={e => setValue('message', e, { shouldValidate: true })}
          />
        </div>

        <div>
          <a onClick={() => resetForm()}>Cancelar</a>

          <BixButton disable={!isValid} onClick={() => onCreatePost()}>
            Publicar
          </BixButton>
        </div>
      </BixCard>
    </CreatePostStyled>
  );
};
