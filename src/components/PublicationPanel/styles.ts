import styled, { css } from "styled-components";

export const Container = styled.form<{isValid: boolean}>`

  max-width: 51.6rem;
  margin: 0 auto 8rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  border: 1px solid ${props => props.theme["gray-600"]};
  background-color: ${props => props.theme["gray-700"]};
  border-radius: 3px;
  gap: 8px;

  .container-group {
    display: flex;
    gap: 1.6rem;

    .icon-delete-show {
      cursor: pointer;
      visibility: visible;
    }

    .icon-delete-hidden{
      visibility: hidden;
    }
  }

  .container-img {
    width: 8.8rem;
    height: 8.8rem;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .imagePreview {
      width: 8.8rem;
      height: 8.8rem;
      border-radius: 36px;
      object-fit: cover;
    }
  }

  input {
    width: 100%;
    background-color: ${props => props.theme["gray-500"]};
    border: 0;
    outline: 0;
    height: 4rem;
    padding: 0 1rem;
    border-radius: 8px;
    font-size: 1.4rem;
    margin-top: 8px;
    color: ${props => props.theme["white"]};

    &::placeholder {
      color: ${props => props.theme["gray-300"]};
    }
  }

  textarea {
    width: 100%;
    background-color: ${props => props.theme["gray-500"]};
    border: 0;
    outline: 0;
    height: 8rem;
    padding: 1rem;
    border-radius: 8px;
    resize: none;
    font-size: 1.4rem;
    color: ${props => props.theme["white"]};

    &::placeholder {
      color: ${props => props.theme["gray-300"]};
    }
  }

  .container-actions {
    display: flex;
    width: 100%;
    justify-content: end;
    gap: 2.4rem;
    margin-top: 3.2rem;

    .btn-publish {
      background-color: ${props => props.theme["gray-400"]};
      border-radius: 8px;
      padding: 1.2rem 2.4rem;
      border: none;
      cursor: pointer;
      color: ${props => props.theme["gray-700"]};
      font-size: 1.4rem;
      line-height: 1.29;
      transition: background-color 0.2s;

      ${props => props.isValid &&  css`
      background-color: ${props => props.theme["green-500"]};
        color: ${props => props.theme["white"]};
      `}
    }

    .delete {
      border: none;
      background: transparent;
      cursor: pointer;
      color: ${props => props.theme["gray-400"]};
      font-size: 1.4rem;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        top: 30px;
        left: 0px;
        height: 1px;
        background-color: ${props => props.theme["gray-400"]};
      }
    }
  }

`;
