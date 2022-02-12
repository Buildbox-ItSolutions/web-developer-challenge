import React, {useContext, useRef, useState} from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import {v4 as uuidv4} from "uuid";

import Holder from "../assets/images/placeholder.svg";
import Trash from "../assets/images/trash.svg";
import useInput from "../hooks/use-Input";
import PostContext from "../store/post-context";
import {toBase64} from "../utils/base";

const FormSty = styled.div`
  width: min(516px, 90%);
  margin: 2.5rem auto;
  background-color: var(--color-gray-bg-two);

  display: flex;
  border: solid 1px var(--color-gray-border-one);

  flex-direction: column;
  align-items: center;
  padding-inline: 1.5rem;

  .form__image-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;

    .form__image-input {
      width: 88px;
      height: 88px;
      overflow: hidden;
      border: 1px solid var(--color-gray-send);

      border-radius: 40%;
      margin-block: 1.5rem 1rem;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      input[type="file"] {
        display: none;
      }
    }

    .form__image-trash {
      position: absolute;
      right: -2.5rem;
      cursor: pointer;
      background-color: transparent;
      border: 0;
      transition: transform 0.2s ease-in;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .form__input-wrapper,
  .form__message-wrapper {
    width: 100%;

    p {
      position: relative;
      top: -5px;
      color: #994929;
      font-size: var(--text-sm);
    }
  }

  .form__name-input,
  .form__message-input {
    border-radius: 8px;
    padding: 0.5rem 0.5rem;
    color: #fff;
    background-color: var(--color-gray-bg-three);

    ::placeholder {
      color: var(--color-gray-title);
    }
  }

  .form__name-input {
    height: 40px;
    width: 100%;
    margin-bottom: 0.5rem;
    border: ${(props) =>
            props.nameHasError
                    ? "1px solid #d6362b"
                    : "1px solid var(--color-gray-title)"};

    &:focus {
      outline: 0;
      border: ${(props) =>
              props.nameHasError
                      ? "1px solid #d6362b"
                      : "1px solid var(--primary-color)"};
    }
  }

  .form__message-input {
    height: 120px;
    width: 100%;
    resize: none;
    border: ${(props) =>
            props.messageHasError
                    ? "1px solid #d6362b"
                    : "1px solid var(--color-gray-title)"};

    &:focus {
      outline: 0;
      border: ${(props) =>
              props.messageHasError
                      ? "1px solid #d6362b"
                      : "1px solid var(--primary-color)"};
    }
  }

  .form__buttons-wrapper {
    width: 100%;
    margin-block: 1.5rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;

    button {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      border: 0;
      cursor: pointer;
    }

    .reset {
      background-color: transparent;
      color: var(--color-gray-send);
      text-decoration: underline;
    }

    .add {
      background-color: var(--primary-color);
      color: #fff;
      transition: background-color 0.2s ease-in;

      &:hover {
        background-color: var(--primary-color-hover);
      }
    }

    .add:disabled {
      background-color: var(--color-gray-send);
      color: var(--color-gray-bg-two);
      cursor: not-allowed;
    }
  }
`;

const Form = () => {
    const {addPost} = useContext(PostContext);
    const imageRef = useRef();
    const [image, setImage] = useState(null);

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        reset: resetName,
        inputBlurHandler: nameBlurHandler,
        inputChangeHandler: nameChangeHandler,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredMessage,
        isValid: enteredMessageIsValid,
        hasError: messageInputHasError,
        reset: resetMessage,
        inputBlurHandler: messageBlurHandler,
        inputChangeHandler: messageChangeHandler,
    } = useInput((value) => value.trim() !== "");

    const handleImage = async (e) => {
        const file = e.target.files[0];

        const fileTo64 = await toBase64(file);

        setImage(fileTo64);
    };

    const removeImage = (e) => {
        setImage(null);
        imageRef.current.value = null;
    };

    let formIsValid = false;

    if (enteredNameIsValid && enteredMessageIsValid && image !== null) {
        formIsValid = true;
    }

    const handlePostSubmit = () => {
        if (!formIsValid) {
            toast.error(
                "Formulário invalido. Certifique-se de inserir um nome, uma imagem e uma mensagem validos"
            );
            return;
        }

        const post = {
            id: uuidv4(),
            name: enteredName,
            message: enteredMessage,
            image,
        };

        addPost(post);
    };

    const handlePostReset = () => {
        resetMessage();
        resetName();
        setImage(null);
        imageRef.current.value = null;
    };

    return (
        <FormSty
            nameHasError={nameInputHasError}
            messageHasError={messageInputHasError}
        >
            <div className="form__image-wrapper">
                <label className="form__image-input" htmlFor="image">
                    <img src={image ? image : Holder} alt=""/>

                    <input ref={imageRef} id="image" type="file" onChange={handleImage}/>
                </label>
                {image && (
                    <button className="form__image-trash" onClick={removeImage}>
                        <img src={Trash} alt="remove"/>
                    </button>
                )}
            </div>
            <div className="form__input-wrapper">
                <input
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    placeholder="Digite seu nome"
                    className="form__name-input"
                    type="text"
                />
                {nameInputHasError && <p>Insira um nome.</p>}
            </div>
            <div className="form__message-wrapper">
        <textarea
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            placeholder="Mensagem"
            className="form__message-input"
            rows="3"
            spellCheck="false"
        />
                {messageInputHasError && <p>Insira uma mensagem.</p>}
            </div>
            <div className="form__buttons-wrapper">
                <button className="reset" onClick={handlePostReset}>
                    Descartar
                </button>
                <button
                    className="add"
                    disabled={!formIsValid}
                    onClick={handlePostSubmit}
                >
                    Publicar
                </button>
            </div>
        </FormSty>
    );
};

export default Form;
