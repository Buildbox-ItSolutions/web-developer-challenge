import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/logo.png';
import imgIcon from '../assets/img_icon.svg';
import trashIcon from '../assets/trash_icon.svg';
import deleteIcon from '../assets/delete_icon.svg';

// general styles
const H3 = styled.h3`
    width: 30px;
    height: 17px;
    // margin: 56px 911px 8px 425px;
    // font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
`;

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #343434;
`;

const Spacing = styled.div`
    width: 100%;
    height: 1px;
    background-color: #232323;
`;

const Header = styled.header`
    width: 100%;
    height: 93px;
    background-color: #2b2b2b;
`;

const Logo = styled.img.attrs({
    src: `${logoImg}`
  })`
    width: 103px;
    height: 45px;
    margin-top: 24px;
    background-size: contain;
    filter: drop-shadow(6px 6px 6px #202020);
`;

const ContentWrapper = styled.div`
    margin-top: 40px;
`;

// form input related styles
const PostInputBox = styled.form`
    width: 80%;
    max-width: 516px;
    height: 353px;
    padding: 24px;
    margin: auto;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`;

const GhostDiv = styled.div`
    width: 128px;
    height: 88px;
    margin: auto;
`;

const ThumbnailUpload = styled.button`
    width: 88px;
    height: 88px;
    padding: 32px;
    margin: auto;
    display: block;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
    float: right;
`;

const ImgIcon = styled.img.attrs({
    src: `${imgIcon}`
})`
    width: 24px;
    height: 24px;
    display: ${(props:any) => props.theme.displayImgIcon};
`;

const ImgThumbnail = styled.img`
    height: 86px;
    width: 86px;
    position: relative;
    top: -32px;
    left: -32px;
    border-radius: 36px;
    display: ${(props:any) => props.theme.displayImgThumbnail};
`;

const RemoveImgButton = styled.button`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    text-decoration: none;
    background: rgba(0,0,0,0);
    border: none;
    top: 32px;
    position: relative;
    float: right;
`;

const TrashIcon = styled.img.attrs({
    src: `${trashIcon}`
})`
    width: 24px;
    height: 24px;
    display: ${(props:any) => props.theme.displayTrashIcon};
`;

const ImgInput = styled.input.attrs({
    type: `file`, accept: `image/*`
})`
    height: 20px;
    padding-top: 10px;
    display: ${(props:any) => props.theme.displayImgInput};
`;

const TextInput = styled.input`
    width: 90%;
    height: 40px;
    margin: 16px 0 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
    border: none;
    background-color: #494949;
    color: white;
`;

const TextArea = styled.textarea`
    width: 90%;
    height: 80px;
    margin: 8px 0 32px;
    padding-top: 12px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
    border: none;
    background-color: #494949;
    color: white;
`;

const CancelButton = styled.span`
    width: 60px;
    height: 17px;
    margin: 12px 24px 12px 0;
    float: right;
    // font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #5f5f5f;
    text-decoration: underline;
`;

const SendButton = styled.button`
    width: 98px;
    height: 41px;
    margin: 0 0 0 24px;
    padding: 12px 24px;
    float: right;
    border-radius: 8px;
    border: none;
    background-color: ${(props:any) => props.theme.bgColor};
    color: ${(props:any) => props.theme.color};
`;


// feeds list related styles
const FeedList = styled.div`
    padding: 56px 24px 24px 24px;
    margin: auto;
    border-radius: 3px;
`;

const FeedPost = styled.div`
    max-width: 516px;
    padding: 12px 12px 32px 24px;
    margin: auto;
    margin-bottom: 16px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`;

const TitleBox = styled.div`
    max-width: 516px;
    margin: auto;
`;

const ThumbnailBox = styled.div`
    width: 22%;
    float: left;
`;

const MsgBox = styled.div`
    width: 70%;
    float: left;
`;

const DeleteButtonBox = styled.div`
    width: 8%;
    float: left;
`;

const AuthorBox = styled.div`
    width: 100%;
`;

const PostThumbnail = styled.img`
    width: 88px;
    height: 88px;
    margin: 24px 32px 16px 0;
    border-radius: 36px;
    float: left;
`;

const MsgText = styled.div`
    margin: 24px 12px 24px 32px;
    // font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
`;

const DeleteButton = styled.button`
    object-fit: contain;
    float: right;
    background-color: rgb(0,0,0,0.0);
    border: none;
`;

const DeleteIcon = styled.img.attrs({
    src: `${deleteIcon}`
})`
    width: 20px;
    height: 20px;
`;

const EnviadoPor = styled.span`
    // font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;
    padding-right: 0.5rem;
`;

const AuthorName = styled.span`
    // font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
`;

export { 
    // general
    H3, Wrapper, Spacing, Header, Logo, ContentWrapper,
    // form input related
    PostInputBox, GhostDiv, ThumbnailUpload, ImgIcon, ImgThumbnail, RemoveImgButton, TrashIcon, ImgInput,
    TextInput, TextArea, CancelButton, SendButton,
    // feeds list related
    FeedList, FeedPost, TitleBox, ThumbnailBox, MsgBox, PostThumbnail, MsgText, DeleteButtonBox,
    DeleteButton, DeleteIcon, AuthorBox, EnviadoPor, AuthorName
};