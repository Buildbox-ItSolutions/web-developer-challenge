import styled from 'styled-components'
import React from 'react'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import ImageLogo from '../imgs/image.png'

import { Container, ContainerFeed, ProductAdd, ImgImport, InputTitleAddPost, InputTxtAreaAddPost, BtnDiv, BtnDiscart, BtnAdd, NewItemContainer, Feed, ImgPost, TextPostContainer, FileInput, FeedContainer} from './styles'

export default function Home() {  

    const [posts, setPosts] = useState<any>(
        [
            {
                id: 0,
                photo: "https://avatars.githubusercontent.com/u/105875989?s=400&u=a83bd113261d3dbe705c7bccc24f1eb4d40e1c4d&v=4",
                name: "Luan Nunes",
                description: "A Buildbox é uma empresa sensacional, quando o assunto é tecnologia e inovação, pode contar com eles."
            }
        ]
    )

    function handleImportPhoto() {
        const action = document.getElementById('fileInput') as HTMLInputElement; 
        action.click();         
    }       

    function handleAddPost() {

        let Newpost: object = {}
        let $inputName = document.getElementById('inputName') as HTMLInputElement;
        let $inpuTextArea: any = document.getElementById('inpuTextArea') as HTMLInputElement;
        let $photo: any = document.getElementById('importPhoto') as HTMLInputElement;

        if (!$inputName.value || !$inpuTextArea.value) {
            toast.warn("Preencha todos os campos por gentileza!")
            return
        }

        if (!posts[0]) { // verifica se tem algum post no array e adiciona o indice 0 caso não tenha
            Newpost = {
                id: 0,
                photo: $photo.src,
                name: $inputName.value,
                description: $inpuTextArea.value,
            }
        } else {
            Newpost = {
                id: posts[0].id + 1,
                photo: $photo.src,
                name: $inputName.value,
                description: $inpuTextArea.value,
            }
        }

        setPosts((posts: object[]) => [Newpost, ...posts]);

        $photo.src = ImageLogo;
        $inputName.value = '';
        $inpuTextArea.value = '';

        toast.success('Post feito com sucesso!');

    }

    function handleDiscartPost() {

        let $inputName = document.getElementById('inputName') as HTMLInputElement;
        let $inpuTextArea = document.getElementById('inpuTextArea') as HTMLInputElement;
        let $photo = document.getElementById('importPhoto') as HTMLInputElement;

        if (!$inputName.value && !$inpuTextArea.value && $photo.src === ImageLogo) {
            toast.warn("Os campos já estão vazios!")
            return
        }

        $photo.src = ImageLogo;
        $inputName.value = '';
        $inpuTextArea.value = '';

        toast.success('Post descartado com sucesso!')
    }

    function handleRemovePost(id:number) {
        let filterPosts: [] = posts.filter((post: any) => {
            return (post.id !== id);
        })
        setPosts(filterPosts);
        toast.success("Post excluido com sucesso!")
    }

    function handleImgImportAction() {        
            const photo: any = document.getElementById('importPhoto');
            const reader = new FileReader();
            const file: any = document.getElementById('fileInput');

            if(file.files.length <= 0) {
                return;
            }

            reader.onload = () => {
                photo.src = reader.result;
            }

            reader.readAsDataURL(file.files[0]);        
    }

    return (
        <Container className='container-fluid row'>
            <ContainerFeed className='feed col col-lg-4'>
                <ProductAdd className='container'>
                    <ImgImport src={ImageLogo} id='importPhoto' alt='imageLogo' onClick={handleImportPhoto}/>
                    <FileInput id='fileInput' onChange={handleImgImportAction} type='file' accept="image/*" />
                    <InputTitleAddPost maxLength={120} type='text' id='inputName' placeholder='Digite o seu nome' />
                    <textarea maxLength={120} id='inpuTextArea' placeholder='Mensagem'></textarea>
                    <BtnDiv className='btns'>
                        <BtnDiscart onClick={handleDiscartPost}>Descartar</BtnDiscart>
                        <BtnAdd onClick={handleAddPost}>Publicar</BtnAdd>
                    </BtnDiv>
                </ProductAdd>
                
                <FeedContainer className='container'>
                    <p className='mt-5 feedTitle'>Feed</p>
                    <div className='row mt-5'>
                        {posts.map((item: any) => {
                            return (
                                <NewItemContainer data-aos="fade-right" data-aos-duration="1500" key={item.id} className='row mt-3'>
                                    <div className='btnDiv'>
                                        <button onClick={() => handleRemovePost(item.id)}>X</button>
                                    </div>
                                    <Feed>
                                        <ImgPost src={item.photo} alt={item.name} />
                                        <TextPostContainer className='text'>
                                            <h6>{item.description}</h6>
                                            <p className='sendFor'>Enviado por</p>
                                            <p className='nameUser'>{item.name}</p>
                                        </TextPostContainer>
                                    </Feed>
                                </NewItemContainer>
                            )
                        })}
                    </div>
                </FeedContainer>
            </ContainerFeed>
        </Container>
    )
}