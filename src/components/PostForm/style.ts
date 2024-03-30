import styled from "styled-components";


export const Form = styled.form`
  width: 100%;
  height: fit-content;
  
  background-color: ${({theme}) => theme.colors.black};
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 540px) {
    width: 50rem;
    padding: 2.4rem;
  }
`;

export const PhotoWrapper = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  > svg {
    cursor: pointer;
  }
`;

export const PhotoUpload = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 3rem;
  cursor: pointer;

  >input {
    display: none;
  }
  
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.colors.borderColor};

  display: flex;
  justify-content: center;
  align-items: center;


  >svg {
    width: 2.5rem;
    height: 2.5rem;

    color: ${({theme}) => theme.colors.gray};
    font-weight: 400;
  }

`

export const UploadedImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 3rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const InputsField = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Input =  styled.input`
  background-color: ${({ theme }) => theme.colors.grayDark1};
  border-radius: 0.8rem;
  height: 4rem;
  padding: 0 1rem;
  font-size: 1.4rem;
  color: ${({theme}) => theme.colors.white};

  &::placeholder {
    color: ${({theme}) => theme.colors.grayLight};
  }
`;

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.grayDark1};
  border-radius: 0.8rem;
  padding: 1rem;
  font-size: 1.4rem;
  color: ${({theme}) => theme.colors.white};
  font-family: 'Roboto';

  &::placeholder {
    color: ${({theme}) => theme.colors.grayLight};
  }
  `;


export const ButtonWrapper = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;
  gap: 1.4rem;
  
  @media (min-width: 380px) {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.bgButton};
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1.2rem 2.4rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;

  &:disabled{
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};
    cursor: not-allowed;
  }

  &:nth-child(1) {
    background-color: transparent;
    text-decoration: underline;
    color: ${({theme}) => theme.colors.grayLight};
  }
`;