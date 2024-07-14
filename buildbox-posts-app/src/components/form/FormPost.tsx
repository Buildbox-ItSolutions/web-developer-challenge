import { useForm, SubmitHandler } from 'react-hook-form';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { PostProps } from '../../types/Post';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../../types/formSchema';
import NoAvatarPicture from '../pictures/NoAvatarPicture';
import AvatarPicture from '../pictures/AvatarPicture';
import * as S from './FormPostStyle';

type InputProps = z.infer<typeof formSchema>;

type FormPostProps = {
    onAddPost: (post: Omit<PostProps, 'id'>) => void;
}

export default function FormPost({ onAddPost }: FormPostProps) {
    const {
        handleSubmit,
        register,
        setValue,
        reset,
        formState: { errors }
    } = useForm<InputProps>({ resolver: zodResolver(formSchema) });

    const [avatar, setAvatar] = useState<string>();
    const inputFileRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        register("picture")
    }, [register])

    const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            setAvatar(URL.createObjectURL(file));
            setValue('picture', files)
        }
        setValue("picture", files || undefined);
    }

    const handleLoadPicture = () => {
        inputFileRef.current?.click();
    }

    const handleRemovePicture = () => {
        setAvatar('');
    }

    const handleResetForm = () => {
        reset();
        handleRemovePicture();
    }

    const onSubmit: SubmitHandler<InputProps> = (data) => {
        const { name, message, picture } = data;
        const pictureURL = picture && picture[0] ? URL.createObjectURL(picture[0]) : '';

        const newPost = {
            name,
            message,
            picture: pictureURL,
        };
        onAddPost(newPost);
        handleResetForm();
    }

    return (
        <>
            <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
                <S.InputContainer>
                    {avatar && (
                        <>
                            <S.AvatarContainer>
                                <S.AvatarWrapper>
                                    <S.TrashCan onClick={handleRemovePicture} />
                                    <AvatarPicture src={avatar} />
                                </S.AvatarWrapper>
                            </S.AvatarContainer>
                        </>
                    )}
                    {!avatar && (
                        <>
                            <S.BtnAddAvatar
                                data-testid="btn-add-avatar"
                                onClick={handleLoadPicture}>
                                <NoAvatarPicture />
                            </S.BtnAddAvatar>
                        </>
                    )}
                    <S.InputFile
                        data-testid="input-file"
                        id='picture'
                        onChange={handleImgChange}
                        ref={inputFileRef}
                        type="file"
                    />
                    <S.Input
                        {...register("name", { required: true })}
                        data-testid="input-name"
                        placeholder='Digite seu nome'
                        type="text"
                    />
                    {errors.name && <S.ValidationErrorMsg>{errors.name.message}</S.ValidationErrorMsg>}
                    <S.TextArea
                        {...register("message", { required: true })}
                        data-testid="input-message"
                        placeholder='Mensagem'
                        rows={6}
                    />
                    {errors.message && <S.ValidationErrorMsg>{errors.message.message}</S.ValidationErrorMsg>}
                    <S.BtnContainer>
                        <S.BtnDiscard
                            data-testid="btn-discard"
                            onClick={handleResetForm}
                            type="button"
                        >
                            Descartar
                        </S.BtnDiscard>
                        <S.BtnSubmit
                            data-testid="btn-submit"
                            type="submit"
                        >
                            Publicar
                        </S.BtnSubmit>
                    </S.BtnContainer>
                </S.InputContainer>
            </S.FormContainer>
        </>
    )
}