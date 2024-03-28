import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30vw;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.1875rem;
  border: solid 1px #3b3b3b;
  background-color: #313131;
`;

export const Image = styled.img`
  width: 88px;
  height: 88px;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px var(--greyish-brown-three);
  background-color: var(--greyish-brown-three-0);
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: solid 1px #3b3b3b;
  background-color: #494949;
  color: var(--white);
  font-size: 14px;
  width: 100%;

  &::placeholder {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29rem;
  letter-spacing: normal;
  color: #9f9f9f;
  }
  
`;
export const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 8px;
  border: solid 1px #3b3b3b;
  background-color: #494949;
  color: var(--white);
  font-size: 14px;
  width: 100%;

  &::placeholder {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29rem;
  letter-spacing: normal;
  color: #9f9f9f;
  }
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ClearButton = styled.a`
  width: 60px;
  height: 17px;
  margin: 12px 24px 12px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #5f5f5f;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  background-color: var(--dark-lime-green);
  border: none;
  color: var(--white); 
  &:disabled {
    background-color: #5f5f5f;
    color: var(--black-four); 
  }
`;

export const TextPublicar = styled.p`
  width: 50px;
  height: 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
`;