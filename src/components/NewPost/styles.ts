import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const FormWrapper = styled.div`
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
`;

export const UploadPhoto = styled.input`
    width: 88px;
    height: 88px;
    margin-bottom: 16px;
    padding: 32px;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px ${Colors.borderImg};
`;

export const EnterName = styled.input`
    width: 100%;
    height: 40px;
    margin: 16px 0 8px;
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
    overflow-y: hidden;
    resize: none;

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
`;