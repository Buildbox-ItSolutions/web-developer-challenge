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

export default function FormPost({onAddPost}: FormPostProps) {
    const { handleSubmit, register, setValue } = useForm<InputProps>();
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

    const onSubmit: SubmitHandler<InputProps> = (data) => {
        const { name, message, picture } = data;
        const pictureURL = picture && picture[0] ? URL.createObjectURL(picture[0]) : '';
        const newPost = {
            name,
            message,
            picture: pictureURL,
        };
        onAddPost(newPost);
    }

    return (
        <>
            <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
                <S.InputContainer>
                    <div onClick={handleLoadPicture}>
                        {avatar && <AvatarPicture src={avatar} />}
                        {!avatar && <NoAvatarPicture />}
                    </div>
                    <S.InputFile
                        id='picture'
                        type="file"
                        ref={inputFileRef}
                        onChange={handleImgChange}
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
                        <S.BtnDiscard type="button">Descartar</S.BtnDiscard>
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