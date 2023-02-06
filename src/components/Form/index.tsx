import {
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  useForm,
} from 'react-hook-form';

import {
  yupResolver
} from '@hookform/resolvers/yup';

import styled from 'styled-components';

import {
  Button,
} from '../Button';

import {
  Post,
  PostItem,
} from '../../types';

import {
  PostSchema,
} from '../../schema';

import {
  Profile,
} from '../Profile';

import {
  randomId,
} from '../../utils/RandomId';

import image from '../../assets/image.svg';
import trash from '../../assets/trash.svg';
import { IconButton } from '../IconButton';

const initialPostFormValues: Post = {
  picture: null,
  name: '',
  message: '',
};

export const FormView = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.gray[ 400 ]};
  background-color: ${({ theme }) => theme.colors.gray[ 450 ]};
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  margin-bottom: 16px;
  border-radius: 36px;
  border: 1px solid #4B4B4B;
  transition: opacity .2s;

  &:active {
    opacity: .5;
  }
`;

const TextInput = styled.input`
  width: 100%;
  max-height: 40px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  color: #FFF;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.gray[ 300 ]};
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  max-width: 100%;
  max-height: 80px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  color: #FFF;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.gray[ 300 ]};
  resize: none;
`;

const ActionsView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 32px;
`;

export interface FormProps {
  handleNewPost: ( post: PostItem ) => void;
};

export const Form: React.FC<FormProps> = ({
  handleNewPost,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { isValid }
  } =
    useForm<Post>({
      mode: "onChange",
      resolver: yupResolver( PostSchema ),
      defaultValues: initialPostFormValues,
    });

  const [ preview, setPreview ] = useState<string | null>( null );

  const files = watch('picture');

  const getBase64 = ( file: File ) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      setPreview( reader.result as string );
    };

    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };

  const onSubmit = useCallback(( data: Post ) => {
    if( preview ) {
      handleNewPost({
        id: randomId(),
        picture: preview,
        name: data.name,
        message: data.message,
      })
    }

    reset( initialPostFormValues, {
      keepDefaultValues: true,
    });

    setPreview( null );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ preview ]);

  const handleRemovePicture = () => {
    setValue('picture', null, {
      shouldValidate: true,
    });

    setPreview( null );
  };

  const handleReset = () => {
    setPreview( null );

    reset( initialPostFormValues, {
      keepDefaultValues: true,
    });
  };

  useEffect(() => {
    if( files?.length && files?.length > 0 ) {
      getBase64( files[ 0 ]);
    }
  }, [ files ]);

  return (
    <FormView onSubmit={ handleSubmit( onSubmit )}>
      {
        preview
          ? (
            <Profile picture={ preview }>
              <IconButton
                onClick={ handleRemovePicture }
                style={{
                  position: 'absolute',
                  top: 32,
                  right: -40,
                }}
              >
                <img
                  src={ trash }
                  alt="icon"
                />
              </IconButton>
            </Profile>
          )
          : (
            <Label htmlFor="file-input-id">
              <input
                type="file"
                id="file-input-id"
                hidden
                { ...register('picture')}
              />

              <img
                src={ image }
                alt="icon"
              />
            </Label>
          )
      }

      <TextInput
        type="text"
        placeholder="Digite seu nome"
        { ...register('name')}
      />

      <TextAreaInput
        placeholder="Mensagem"
        rows={ 5 }
        { ...register('message')}
      />

      <ActionsView>
        <Button
          onClick={ handleReset }
          variant="link"
        >
          Descartar
        </Button>

        <Button
          disabled={ !isValid }
          type="submit"
          variant="contained"
        >
          Publicar
        </Button>
      </ActionsView>
    </FormView>
  );
};
