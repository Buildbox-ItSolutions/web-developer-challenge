import styled from 'styled-components';
export const PostInput = styled.input`
    padding: 12px 0px 11px 16px;
    border-radius: 8px;
    background-color: #494949;
    border: none;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
    color: #fff;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px;
    }
    &::placeholder {
        color: #9f9f9f;
    }
`
export const PostTextArea = styled.textarea`
    padding: 12px 0px 11px 16px;
    border-radius: 8px;
    background-color: #494949;
    border: none;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
    color: #fff;
    min-height: 80px;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px;
    }
    &::placeholder {
        color: #9f9f9f;
    }
`
export const PublishDisabledButton = styled.button`
    width: 98px;
    height: 41px;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: #5f5f5f;
    border: none;
    font-family: Roboto;
    font-size: 14px;
    text-align: center;
    color: #313131;
`

export const PublishEnabledButton = styled(PublishDisabledButton)`
    background-color: #71bb00;
    color: #fff;
`

export const DiscardButton = styled.button`
    border: none;
    background-color: transparent;
    text-decoration: underline;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
    color: #5f5f5f;
`

export const PostImgDelIcon = styled.img`
    position: absolute;
    left: 88px;
    width: 24px;
    height: 24px;
    padding: 0;
    object-fit: contain;
    cursor: pointer;
`