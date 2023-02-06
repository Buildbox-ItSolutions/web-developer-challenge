import { FC, useEffect } from 'react';
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

const schema = yup.object().shape({
  name: yup.string().required(appErrors.messages.required),
  message: yup.string().required(appErrors.messages.required),
  preview: yup.string().required(appErrors.messages.required),
});

export const CreatePost: FC<CreatePostProps> = () => {
  const {
    register,
    setValue,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({
    mode: 'all',

    resolver: yupResolver(schema),
  });

  const form = watch();

  useEffect(() => {
    const fields = ['name', 'message', 'preview'];

    fields.forEach(field => register(field));
  }, [register, form]);

  const resetForm = () => {
    setValue('name', '');
    setValue('message', '');
    setValue('preview', null);
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
          onUpload={(_, preview) =>
            setValue('preview', preview, { shouldValidate: true })
          }
          onClear={() => setValue('preview', null, { shouldValidate: true })}
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
            cols={20}
            rols={20}
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

          <BixButton disable={!isValid}>Publicar</BixButton>
        </div>
      </BixCard>
    </CreatePostStyled>
  );
};
