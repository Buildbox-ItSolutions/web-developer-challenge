import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GhostDiv, ThumbnailUpload, ImgIcon, ImgThumbnail, RemoveImgButton, TrashIcon, ImgInput } from '../assets/styles';

const ImageInputBoxC = (props:any) => {
    return(
        <ThemeProvider theme={props.theme}>
            <GhostDiv>
                <RemoveImgButton onClick={props.removeImgBtnOnClick}>
                    <TrashIcon></TrashIcon>
                </RemoveImgButton>
                <ThumbnailUpload onClick={props.uploadBtnOnClick}>
                    <ImgIcon></ImgIcon>
                    <ImgThumbnail src={props.formInputs['imgSrc']}></ImgThumbnail>
                </ThumbnailUpload>
            </GhostDiv>
            <ImgInput onChange={props.inputImageOnChange}></ImgInput>
        </ThemeProvider>
    );
}

export default ImageInputBoxC;