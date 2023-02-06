import React, { useRef, useState } from "react";
import { Content } from "../../styles";
import { Autor, BoxForm, CircularImage, CircularInput, Descartar, Mensagem, Publicar, RightContent } from "./style";

const CreatePost = (props: any) => {
    const [selectedImage, setSelectedImage] = useState({url: '', name: ''});
    const imageSelector: any = useRef(null);
    const autorInput: any = useRef(null);
    const mensagemInput: any = useRef(null);

    const addImage = (event: any) => {
        setSelectedImage({
            url: URL.createObjectURL(event.target.files[0]),
            name: event.target.files[0].name
        })
    }

    const resetarTodosOsCampos = () => {
        setSelectedImage({url: '', name: ''})
        imageSelector.current.value = '';
        autorInput.current.value = '';
        mensagemInput.current.value = '';
    }

    const postar = () => {
        props.setFeed( (arr: any) => 
        [...arr, 
            {img: selectedImage.url, img_name: selectedImage.name, 
                autor: autorInput.current.value, mensagem: mensagemInput.current.value}
        ]
        )
    }
    return (
        <BoxForm>
            <Content>
                <CircularImage>
                    <CircularInput type={'file'} ref={imageSelector} onChange={addImage}/>
                    {
                        !selectedImage.url ? <img src={"/image.svg"} alt="Adicionar imagem"/>
                        : <img src={selectedImage.url} style={{borderRadius: '36px'}} width="88px" height="88px" alt={selectedImage.name} />
                    }
                </CircularImage>
            </Content>
            <Autor ref={autorInput} placeholder="Digite seu nome"/>
            <Mensagem ref={mensagemInput} placeholder="Mensagem" />
            <RightContent>
                <Descartar onClick={resetarTodosOsCampos}>
                    Descartar
                </Descartar>
                <Publicar onClick={postar}>
                    Publicar
                </Publicar>
            </RightContent>
        </BoxForm>
    )
}

export default CreatePost;