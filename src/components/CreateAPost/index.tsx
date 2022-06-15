import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
import schema from '../../schemas';
import { Button, Container, ImageInput, InputArea } from './styled';


interface Data {
    name: string,
    message: string
}

const CreateAPost = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Data>({
        resolver: yupResolver(schema)
    });

    const onPublish = (data: Data) => {

    }

    return (
        <>
            <Container onSubmit={handleSubmit(onPublish)}>

                <ImageInput>

                </ImageInput>

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