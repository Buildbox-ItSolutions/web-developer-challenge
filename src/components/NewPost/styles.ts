import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const FormWrapper = styled.form`
    max-width: 516px;
    width: 85%;
    height: 353px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px ${Colors.borderForm};
    background-color: ${Colors.bgForm};
    position: relative;

    .inputPhoto{
        display: none;
        
    }
    .removeImage{
        position: absolute;
        width: 24px;
        height:24px;
        margin-left: 134px;
        margin-top: 34px;
        transition: transform 0.2s ease-in;
        &:hover {
            transform: scale(1.2);
        }
    }
    
`;

export const Container = styled.div`
    display: flex;
`;

export const UploadPhoto = styled.div`
    width: 88px;
    height: 88px;
    margin-bottom: 16px;
    border-radius: 36px;
    border: solid 1px ${Colors.borderImg};
    :hover{
            cursor: pointer;
        }
    
    .noImg{
        width: 24px;
        height: 24px;
        margin: 32px;
    }
    .authorImg{
        width: 100%;
        height: 100%;
        border-radius: 36px;
    }
`;

export const EnterName = styled.input`
    width: 100%;
    height: 40px;
    margin-bottom: 8px;
    padding: 12px;
    border: none;
    border-radius: 8px;
    color: ${Colors.inputText};
    background-color: ${Colors.bgInput};

        ::placeholder{
            color:${Colors.placeholderColor}
        }

`;

export const EnterMessage = styled.textarea`
    width: 100%;
    height: 80px;
    margin-bottom: 32px;
    padding: 12px;
    border: none;
    border-radius: 8px;
    background-color: ${Colors.bgInput};
    color: ${Colors.inputText};
    resize: none;
    ::-webkit-scrollbar {
        width: 0px;
        }
    ::placeholder{
            color:${Colors.placeholderColor}
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: auto;
`;

export const DiscartButton = styled.button`
    margin-right: 24px;
    text-decoration: underline;
    color: ${Colors.discartText};
`;

export const PublishButton = styled.button`
    width: 98px;
    height: 41px;
    object-fit: contain;
    border-radius: 8px;
    background-color: ${Colors.bgButton};
    color: ${Colors.publishText};
    :hover{
        transition: all 0.3s ease-in-out;
        background-color: ${Colors.bgButtonActive};
        color: ${Colors.inputText}
    }
`;