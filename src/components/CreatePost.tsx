import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from 'styled-components';
import imageInput from '../assets/image-input/image@2x.png';
import deleteIcon from '../assets/trash/trash@2x.png';

const StyledCreatePost = styled.div` 
    width: 100%;
    margin: auto;
    box-sizing: border-box;

    textarea {
      resize: none;
    }

    .create-post__form-post {
      padding: 1rem;
      border-radius: 0.1rem;
      border: solid 0.1rem #494949;
      background-color: var(--black);
    }

    .create-post__message-fields {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .create-post__buttons {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      margin-top: 1.5rem;
      justify-content: right;
    }

    .create-post__text-field {
      width: 100%;
      border-radius: 0.4rem;
      padding: 0.5rem;
      border: none;
      background-color: var(--greyish-brown);
      color: white;
    }

    .create-post__clearButton {
      width: auto;
      border: none;
      background: none;
      color: #5f5f5f;
      font-weight: 600;
      text-decoration: underline;
    }

    .create-post__addButton {
      width: auto;
      height: 41px;
      margin: 0 0 0 24px;
      padding: 12px 24px;
      object-fit: contain;
      border-radius: 8px;
      background-color: #5f5f5f;
      border: none;
      color: var(--black-two);
      font-weight: 600;
    }

    .create-post__clearButton:hover {
      color: #ffffff;
    }

    .create-post__addButton:hover {
      background-color: var(--dark-lime-green);
      color: #ffffff;
    }

    .create-post__uploaded-image {
      width: 25%;
      height: 7rem;
      cursor: pointer;
      border-radius: 1.9rem;
      margin: 1rem 0;
    }

    .create-post__upload-image {
      width: 25%;
      height: 50%;
      cursor: pointer;
      border: 1.5px solid #494949;
      border-radius: 1.8rem;
      padding: 1.5rem;
      margin: 1rem 0;
    }

    .create-post__image-input {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .create-post__trash-image {
      width: 23px;
      height: 23px;
    }

    @media only screen and (min-width: 1200px) {
        width: 100%;

        .create-post__upload-image {
          width: 15%;
          height: 40%;
      }
    }
`;

const CreatePost: React.FC<ICreateAreaProps> = ({ onAdd }) => {
  const [post, setPost] = useState<IPost>({ name: "", message: "", imageUrl: null });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };


  const handleDeleteImageChange = () => {
    setPost((prevPost) => ({
      ...prevPost,
      imageUrl: null,
    }));
  };

  const MAX_IMAGE_SIZE_MB = 1;

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];

      const fileSizeInMB = imageFile.size / (1024 * 1024);
      if (fileSizeInMB > MAX_IMAGE_SIZE_MB) {
        alert(`A imagem deve ter até ${MAX_IMAGE_SIZE_MB}MB.`);
        event.target.value = '';
      } else {
        const imageUrl = URL.createObjectURL(imageFile);
        setPost((prevPost) => ({
          ...prevPost,
          imageUrl,
        }));
      }
    }
  };
  
  const submitPost = (event: FormEvent) => {
    onAdd(post);
    setPost({
      name: "",
      message: "",
      imageUrl: null,
    });
    event.preventDefault();
  };

  const clearPost = (event: FormEvent) => {
    setPost({
      name: "",
      message: "",
      imageUrl: null,
    });
    event.preventDefault();
  };

  return (
    <StyledCreatePost>
        <form className="create-post__form-post">
          {post.imageUrl ? (
              <div className="create-post__image-input">
                <img
                  className="create-post__uploaded-image"
                  src={post.imageUrl}
                  alt="Uploaded Image"
                />
                <img
                  className="create-post__trash-image"
                  src={deleteIcon}
                  alt="Delete Image"
                  onClick={handleDeleteImageChange}
                />
              </div>
            ) : (
              <label className="create-post__image-input">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
                />
                <img
                  className="create-post__upload-image"
                  src={imageInput}
                  alt="Upload Image"
                />
              </label>
            )}
        <div className="create-post__message-fields">
          <input
              name="name"
              onChange={handleChange}
              value={post.name}
              placeholder="Digite seu nome"
              className="create-post__text-field"
            />
            <textarea
              name="message"
              onChange={handleChange}
              value={post.message}
              placeholder="Mensagem"
              className="create-post__text-field"
            />
        </div>
        <div className="create-post__buttons">
          <button onClick={clearPost} className="create-post__clearButton">
            Descartar
          </button>
          <button onClick={submitPost} className="create-post__addButton">
            Publicar
          </button>
        </div>
        </form>
    </StyledCreatePost>
  );
};

export default CreatePost;
