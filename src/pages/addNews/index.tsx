import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components'
import { AddNewsWrap } from './style';

import { Form } from '@unform/web'
import { SubmitHandler, FormHandles } from '@unform/core'
import * as Yup from 'yup';
import { addNews, AddNewsProps } from '../../services/supaFunctions';

interface FormData {
    name: string
    email: string
}

interface TypeError {
    [key: string]: string
}

export function AddNews() {
    const navigate = useNavigate();
    const formRef = useRef<FormHandles>(null)

    const handleSubmit: SubmitHandler<FormData> = async (data, {reset}) => {
        try {
            const maskValidate = Yup.object().shape({
                author: Yup.string().required('O Autor é obrigatório'),  
                title: Yup.string().required('Titlo é obrigatório'),
                subtitle: Yup.string().required('Subtitulo é obrigatório'),
                content: Yup.string().required('Conteúdo é obrigatório'),
            })

            await maskValidate.validate(data, {
                abortEarly: false,
            })
            reset();
            navigate('/');
        } catch (err){

            if (err instanceof Yup.ValidationError) {
                const errorMessages : TypeError = {};
                
                err.inner.forEach((error: Yup.ValidationError) => {
                    const { path, message } = error;

                    if(typeof path !== 'undefined'){
                        errorMessages[path] = message;
                    }
            });

            formRef.current?.setErrors(errorMessages);
            }
        }
    }

    return (
        <AddNewsWrap>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="author" />
                <Input name="title" />
                <Input name="subtitle" />
                <Input name="content" />
                <button type='submit'>Submit</button>
            </Form>
        </AddNewsWrap>
    )
}


