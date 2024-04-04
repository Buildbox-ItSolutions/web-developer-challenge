import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 2.5rem;
  /* margin: 2.5rem auto 0; */
  padding: 1.5rem;
  width: 32.5rem;
  max-width: 100%;

  border-radius: 3px;
  border: 1px solid ${props => props.theme["border-post"]};

  background-color: ${props => props.theme["bg-post"]};

  .photo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    color: ${props => props.theme["border-post"]};
  }

  .img-post-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.5rem;
    height: 5.5rem;

    cursor: pointer;

    border-radius: 36px;
    border: 1px solid ${props => props.theme["border-post"]};

  }

  .delete-photo {
    cursor: pointer;
    transition: 0.3s ease-in-out;

    color: ${props => props.theme["orange"]};

    &:hover {
      color: ${props => props.theme["hover-orange"]};
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .label-wrapper label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .label-wrapper input, .label-wrapper textarea {
    max-width: 100%;
    width: 29rem;
    padding: 0.75rem 1rem;

    border-radius: 8px;
    border: none;

    font-size: 0.875rem;

    background-color: ${props => props.theme["bg-input"]};
    color: ${props => props.theme.white};
  }

  .label-wrapper textarea {
    height: 5rem;
    resize: none;
  }  
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;

  width: 100%;

  a {
    font-size: 0.875rem;
    cursor: pointer;

    transition: 0.2s ease-in-out;

    color: ${props => props.theme["cancel-text"]};

    &:hover {
      color: ${props => props.theme["white"]};
      opacity: 0.4;
    }
  }

  button {
    padding: 0.75rem 1.5rem;

    border: none;
    border-radius: 8px;
    cursor: pointer;

    font-size: 0.875rem;

    transition: 0.3s ease-in-out;

    color: ${props => props.theme.white};
    background-color: ${props => props.theme["bg-button"]};

    &:not(:disabled):hover {
      background-color: ${props => props.theme["hover-button"]};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`