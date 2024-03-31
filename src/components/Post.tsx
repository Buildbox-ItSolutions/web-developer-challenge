import React, { useState } from 'react';
import styled from 'styled-components';
import photoUploadSVG from '../assets/photo-upload.svg';
import otherImage from '../assets/image.svg';

const PostListContainer = styled.div`
  width: 516px;
  height: auto;
  margin: 50px auto 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PhotoUpload = styled.label`
  width: 5.5rem;
  height: 5.5rem;
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 36px;
  border: solid 1px #3b3b3b;
  position: relative;
`;

const PhotoInput = styled.input`
  display: none;
`;

const PhotoPreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const PhotoPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UploadIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const OtherImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: auto;
`;

const InputField = styled.input`
  width: 31rem;
  height: 1.5rem;
  margin: 0.6rem 0 0.5rem;
  padding: 13px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  font-size: 1rem;
  color: #ffffff;
  ::placeholder {
    color: #9f9f9f;
  }
  &:focus {
    outline: none;
  }
`;

const MessageField = styled.textarea`
  width: 31rem;
  height: 4.5rem;
  margin: 0.3rem 1.5rem;
  padding: 13px;
  border-radius: 8px;
  background-color: #494949;
  border: none;
  resize: none;
  font-size: 1rem;
  color: #ffffff;
  ::placeholder {
    color: #9f9f9f;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2rem;
`;

const ButtonDescartar = styled.button`
  width: auto;
  height: auto;
  margin-left: 1.5rem;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #5f5f5f;
  cursor: pointer;
  text-decoration: underline;
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  font-size: 0.875rem;
`;

const ButtonPublicar = styled.button`
  width: 6.130rem;
  height: 2.563rem;
  margin-left: 1.5rem;
  padding: 0.79rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #5f5f5f;
  color: #313131;
  cursor: pointer;
  font-size: 0.875rem;
`;

const PostList: React.FC = () => {
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <PostListContainer>
      <PhotoUpload>
        <PhotoInput type="file" accept="image/*" onChange={handlePhotoChange} />
        <PhotoPreviewContainer>
          {photoURL ? (
            <PhotoPreview src={photoURL} alt="Uploaded Photo" />
          ) : (
            <UploadIcon src={photoUploadSVG} alt="Upload Icon" />
          )}
          <OtherImage src={otherImage} alt="Other Image" />
        </PhotoPreviewContainer>
      </PhotoUpload>
      <InputField 
        type="text" 
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageField 
        placeholder="Mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ButtonContainer>
        <ButtonDescartar>Descartar</ButtonDescartar>
        <ButtonPublicar>Publicar</ButtonPublicar>
      </ButtonContainer>
    </PostListContainer>
  );
};

export default PostList;
