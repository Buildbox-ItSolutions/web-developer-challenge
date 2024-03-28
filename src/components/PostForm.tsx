import { useState } from 'react';
import { Button } from "./Button";
import styled from "styled-components";
import EmptyImage from "../assets/empty-image-icon.svg";

const PostForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  
  const isFormEmpty = name.trim() === '' || message.trim() === '';

  return (
    <StyledDiv>
      <StyledLabel>
        <img src={EmptyImage} alt="" />
        <StyledInputFile
          type="file"
          name="image"
          id="image"
          accept="image/png, image/gif, image/jpeg"
        />
      </StyledLabel>

      <StyledInput
        type="text"
        id="name"
        name="name"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <StyledTextArea
        id="message"
        name="message"
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <StyledDivContainer>
        <StyledP>Descartar</StyledP>

        <Button content="Publicar" className={isFormEmpty ? "inactive-button" : ""} />
      </StyledDivContainer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--rectangle-color);
  border-radius: 0.3rem;
  border: solid 0.1rem var(--border-color);
  padding: 2.4rem;
  width: 51.6rem;
  margin-top: 4rem;

  .inactive-button {
    background-color: var(--auxiliar-gray);
    color: var(--rectangle-color);
    cursor: not-allowed;
  }

  
  @media (max-width: 480px) {
    width: 100%;
    padding: 1.6rem;
  }

`;

const StyledLabel = styled.label`
  width: 8.8rem;
  border: 0.1rem solid #4b4b4b;
  border-radius: 3.6rem;
  display: block;
  padding: 3.2rem;
  cursor: pointer;
`;

const StyledInputFile = styled.input`
  border-radius: 3.6rem;
  border: solid 0.1rem #4b4b4b;
  display: none;
`;

const StyledInput = styled.input`
  background-color: var(--background-input-color);
  border-radius: 0.8rem;
  padding: 1.2rem 1.2rem 1.1rem 1.6rem;
  margin: 1.6rem 0 0.8rem;
  height: 4rem;
  width: 100%;
  border: none;
  font-size: 1.4rem;
  outline: none;
  color: var(--white-color);
  font-weight: 400;

  &::placeholder {
    color: var(--auxiliar-text-color);
  }
`;

const StyledTextArea = styled.textarea`
  background-color: var(--background-input-color);
  border-radius: 0.8rem;
  padding: 1.2rem 1.2rem 1.1rem 1.6rem;
  margin: 0.8rem 0 3.2rem;
  height: 8rem;
  width: 100%;
  border: none;
  font-size: 1.4rem;
  outline: none;
  color: var(--white-color);
  font-weight: 400;
  resize: none;

  &::placeholder {
    color: var(--auxiliar-text-color);
  }
`;

const StyledP = styled.p`
  color: var(--auxiliar-gray);
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledDivContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  gap: 2.4rem;
`;

export { PostForm };
