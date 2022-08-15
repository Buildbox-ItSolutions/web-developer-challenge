import { profileEnd } from 'console';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { PostInputBox, TextInput, TextArea, CancelButton, SendButton } from '../assets/styles';
import ImageInputBoxC from './ImageInputBoxC';

const PostInputBoxC = (props:any) => {
    const [displayImgInput, setDisplayImgInput] = useState('none');

    let formFilled = false;
    if(props.formInputs['imgSrc'] != "" && props.formInputs['author'] != "" && props.formInputs['msg'] != ""){
        formFilled = true;
    }

    let displayImgIcon = 'unset';
    let displayImgThumbnail = 'none';
    let displayTrashIcon = 'none';
    if(props.formInputs['imgSrc'] != ""){
        displayImgIcon = 'none';
        displayImgThumbnail = 'unset';
        displayTrashIcon = 'unset';
    }

    let theme = {
        color: "#313131", bgColor: "#5f5f5f", displayTrashIcon: displayTrashIcon,
        displayImgIcon: displayImgIcon, displayImgThumbnail: displayImgThumbnail,
        displayImgInput: displayImgInput
    };
    if(formFilled){
        theme = {
            color: "white", bgColor: "#71bb00", displayTrashIcon: displayTrashIcon,
            displayImgIcon: displayImgIcon, displayImgThumbnail: displayImgThumbnail,
            displayImgInput: displayImgInput
        };
    }

    const uploadBtnOnClick = (e:any) => {
        e.preventDefault();
        if(!formFilled){
            setDisplayImgInput('unset');
        }
    }
    
    const removeImgBtnOnClick = (e:any) => {
        e.preventDefault();
        const newFormInputValues = {
            'imgSrc': '',
            'author': props.formInputs.author,
            'msg': props.formInputs.msg
        };
        props.setFormInputs(newFormInputValues);
        setDisplayImgInput('none');
    }

    const sendBtnOnClick = (e:any) => {
        e.preventDefault();
        if(formFilled){
            let lastPost = {'id': -1};
            if(props.postList.length){
                lastPost = props.postList[props.postList.length -1];
            }
            const newPost = {
                'id': lastPost.id +1,
                'imgSrc': props.formInputs.imgSrc,
                'author': props.formInputs.author,
                'msg': props.formInputs.msg
            };
            props.addPostToList(newPost);
            props.resetFormInputs();
            setDisplayImgInput('none');
        }
    }

    const cancelBtnOnClick = (e:any) => {
        e.preventDefault();
        props.resetFormInputs();
        setDisplayImgInput('none');
    }

    const inputImageOnChange = (e:any) => {
        let imgUrl = URL.createObjectURL(e.target.files[0]); // gets temp URL from the selected image
        const newFormInputValues = {
            'imgSrc': imgUrl,
            'author': props.formInputs.author,
            'msg': props.formInputs.msg
        };
        props.setFormInputs(newFormInputValues);
    }


    const textInputOnChange = (e:any) => {
        const newFormInputValues = {
            'imgSrc': props.formInputs.imgSrc,
            'author': e.target.value,
            'msg': props.formInputs.msg
        };
        props.setFormInputs(newFormInputValues);
    }

    const textAreaOnChange = (e:any) => {
        const newFormInputValues = {
            'imgSrc': props.formInputs.imgSrc,
            'author': props.formInputs.author,
            'msg': e.target.value
        };
        props.setFormInputs(newFormInputValues);
    }

    return(
        <PostInputBox>
            <ImageInputBoxC uploadBtnOnClick={uploadBtnOnClick} removeImgBtnOnClick={removeImgBtnOnClick}
                            inputImageOnChange={inputImageOnChange} formInputs={props.formInputs}
                            theme={theme}></ImageInputBoxC>
            <TextInput type="text" placeholder="Digite seu nome" value={props.formInputs['author']}
                            onChange={textInputOnChange}></TextInput>
            <TextArea placeholder="Mensagem" value={props.formInputs['msg']}
                            onChange={textAreaOnChange}></TextArea>
            <ThemeProvider theme={theme}>
                <SendButton onClick={sendBtnOnClick}>Publicar</SendButton>
            </ThemeProvider>
            <CancelButton onClick={cancelBtnOnClick}>Descartar</CancelButton>
        </PostInputBox>
    );
};

export default PostInputBoxC;