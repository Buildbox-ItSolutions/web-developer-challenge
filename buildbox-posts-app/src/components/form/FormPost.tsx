import { useForm, SubmitHandler } from 'react-hook-form';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as S from './FormPostStyle';
import NoAvatarPicture from '../pictures/NoAvatarPicture';
import AvatarPicture from '../pictures/AvatarPicture';
import { PostProps } from '../../types/Post';

type InputProps = {
    picture: FileList | null,
    name: string,
    message: string,
}

type FormPostProps = {
    onAddPost: (post: Omit<PostProps, 'id'>) => void;
}

export default function FormPost({ onAddPost }: FormPostProps) {
    const { handleSubmit, register, setValue, reset } = useForm<InputProps>();
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
        setValue("picture", files);
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
                            <S.TrashCan onClick={handleRemovePicture} />
                            <AvatarPicture src={avatar} />
                        </S.AvatarContainer>
                        </>
                    )}
                    {!avatar && (
                        <>
                            <S.BtnAddAvatar onClick={handleLoadPicture}>
                                <NoAvatarPicture />
                            </S.BtnAddAvatar>
                        </>
                    )}
                    <S.InputFile
                        id='picture'
                        onChange={handleImgChange}
                        ref={inputFileRef}
                        type="file"
                    />
                    <S.Input
                        placeholder='Digite seu nome'
                        {...register("name")}
                        type="text"
                    />
                    <S.TextArea
                        {...register("message")}
                        placeholder='Mensagem'
                        rows={6}

                    />
                    <S.BtnContainer>
                        <S.BtnDiscard
                            onClick={handleResetForm}
                            type="button"
                        >
                            Descartar
                        </S.BtnDiscard>
                        <S.BtnSubmit
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