import React, { TableHTMLAttributes, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Input, Textarea, Button, ModalImage } from '../../components'
import { AddNewsWrap, FormWrap } from './style';

import { Form } from '@unform/web'
import { SubmitHandler, FormHandles } from '@unform/core'
import * as Yup from 'yup';
import { addNews } from '../../services/supaFunctions';
import { NewsProps } from '../../interfaces/News';

interface TypeError {
    [key: string]: string
}

export function AddNews() {
    const navigate = useNavigate();
    const formRef = useRef<FormHandles>(null)
    const [imageSrc, setImageSrc] = useState('');
    
 
    const handleSubmit: SubmitHandler<NewsProps> = async (data, {reset}) => {
        try {
            const maskValidate = Yup.object().shape({
                author: Yup.string().required('O Autor é obrigatório'),  
                title: Yup.string().required('Titlo é obrigatório'),
                subtitle: Yup.string().required('Subtitulo é obrigatório'),
                content: Yup.string().required('Conteúdo é obrigatório'),
                img: Yup.string().default('placeholder image'),
            })

            await maskValidate.validate(data, {
                abortEarly: false,
            })

            await addNews(data);

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

    const handleDiscart = () => {
        navigate('/');
    }

    return (
        <AddNewsWrap>
           <FormWrap>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <div className='image-upload'>
                        <ModalImage 
                         onSelectImage={ (image: string) => {
                             setImageSrc(image);
                         } }
                        />
                    </div>
                    <input type='hidden' value={imageSrc} name='img' />
                    <Input name="title" placeholder='Titulo'/>
                    <Input name="subtitle" placeholder='Subtítulo'/>
                    <Input name="author" placeholder='Nome do Autor'/>
                    <Textarea name="content" placeholder='Insira o conteúdo do post aqui' />

                    <div className='button-group'>
                        <Button onClick={() => handleDiscart()} bgColor="inherit">Descartar</Button>
                        <Button>Publicar</Button>
                    </div>
                </Form>
            </FormWrap>
        </AddNewsWrap>
    )
}




