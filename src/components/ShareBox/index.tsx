import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { createPostSchema } from '../../schemas/createPost';
import Button from '../Button';
import Input from '../Input';

import * as Yup from 'yup';

import { nanoid } from 'nanoid';
import { useSetRecoilState } from 'recoil';
import { IPost, postsListState } from '../../atoms/postList';
import CustomDropzone from '../CustomDropzone';
import { ActionsSection, Container } from './styles';

const ShareBox = () => {
    const formRef = useRef<FormHandles>(null);
    const setPostList = useSetRecoilState(postsListState);

    const handleSubmit = async (data: IPost) => {
        try {
            formRef.current?.setErrors({});

            await createPostSchema.validate(data, {
                abortEarly: false,
            });

            const newPost: IPost = {
                id: nanoid(),
                name: data.name,
                message: data.message,
                image: data.image,
            };

            setPostList((postList) => [newPost, ...postList]);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const validationErrors: Record<string, string> = {};

                err.inner.forEach((error) => {
                    validationErrors[error.path as string] = error.message;
                });
                formRef.current?.setErrors(validationErrors);
            }
        }
    };
    return (
        <Container>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <CustomDropzone />
                <Input
                    name="name"
                    placeholder="Digite seu nome"
                    margin="16px 0 8px 0"
                />
                <Input
                    name="message"
                    placeholder="Mensagem"
                    multilines
                    margin="0 0 32px 0"
                />

                <ActionsSection>
                    <Button
                        variant="secondary"
                        content="Descartar"
                        type="reset"
                    />
                    <Button
                        variant="primary"
                        content="Publicar"
                        type="submit"
                    />
                </ActionsSection>
            </Form>
        </Container>
    );
};

export default ShareBox;
