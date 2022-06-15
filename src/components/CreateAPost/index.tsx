import React from 'react';

import { Button, Container, ImageInput, InputArea } from './styled';
import NoImage from "../../assets/images/no-image.png";
import Trash from "../../assets/images/trash.png";

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import schema from '../../schemas';


import { useData } from '../../providers/Data';

interface Data {
    name: string,
    message: string
}

const CreateAPost = () => {

    const { profileImage, setProfileImage, showTrash } = useData();

    const handleImage = (file: any) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            if (reader.readyState === 2) {
                const data = e.target.result;
                setProfileImage(data);
                const image = document.querySelector("#userImage") as HTMLScriptElement
                image.classList.add("updatedImage");
            }
        }
        reader.readAsDataURL(file);
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Data>({
        resolver: yupResolver(schema)
    });

    const onPublish = (data: Data) => {

    }

    return (
        <>
            <Container onSubmit={handleSubmit(onPublish)}>

                <ImageInput>
                    <img
                        src={profileImage ? profileImage : NoImage}
                        alt="Imagem"
                        id="userImage"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e: any) => handleImage(e.target.files[0])}
                    />
                </ImageInput>

                {showTrash && (
                    <img alt="Excluir imagem" src={Trash} className="Trashbin"
                        onClick={() => {
                            setProfileImage(NoImage)
                        }} />
                )}

                <InputArea>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        {...register("name")}
                    />
                    <textarea
                        cols={30}
                        rows={10}
                        placeholder="Mensagem"
                        {...register("message")}
                    ></textarea>
                    <div>
                        <Button type="button" >Descartar</Button>
                        <Button id="publish" publish={true} type="submit">Publicar</Button>
                    </div>
                </InputArea>

            </Container>

        </>
    );
}

export default CreateAPost;