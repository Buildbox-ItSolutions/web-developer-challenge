import React, { useState } from 'react';
import ButtonForm from '../ButtonForm';
import InputField from '../InputForm';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

export type Post = {
    username: string;
    description: string;
    photo: string;
};

type FormPostProps = {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

const FormPost: React.FC<FormPostProps> = ({ setPosts }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Post>();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const onSubmit = (data: Post) => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = () => {
                const base64data = reader.result as string;
                setPosts(prevPosts => [...prevPosts, { ...data, photo: base64data }]);
                reset();
                setSelectedFile(null);
            };
        } else {
            setPosts(prevPosts => [...prevPosts, data]);
            reset();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    return (
        <Wrapper>
            <FormContainer>
                <Title>Formulario de Post</Title>
                <Paragraph>selecione uma imagem</Paragraph>
                <PhotoUploadLabel htmlFor="photo-upload">
                    <PhotoUploadImage
                        src={selectedFile ? URL.createObjectURL(selectedFile) : "/src/assets/user.jpg"}
                        width={90}
                        alt=""
                    />
                </PhotoUploadLabel>
                <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <FormContent>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <InputField
                            label="Nome de usuário"
                            type="text"
                            name="username"
                            register={register}
                            errors={errors}
                        />
                        <InputField
                            label="Mensagem"
                            type="text"
                            name="description"
                            register={register}
                            errors={errors} 
                        />
                        <ButtonContainer>
                            <DiscardButton
                                type="button"
                                onClick={() => {
                                    reset();
                                    setSelectedFile(null);
                                }}
                            >
                                descartar
                            </DiscardButton>
                            <ButtonForm />
                        </ButtonContainer>
                    </Form>
                </FormContent>
            </FormContainer>
        </Wrapper>
    );
};


const Wrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  border-bottom: 0.2px solid #3f3f46;
  padding-bottom: 3rem;
  justify-content: center;
`;

const FormContainer = styled.div`
  border: 1px solid #3f3f46;
  border-radius: 0.125rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  width: 600px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const Paragraph = styled.p`
    font-size: 0.75rem;
    text-align: center;
    margin-top: 2rem;
`

const PhotoUploadLabel = styled.label`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const PhotoUploadImage = styled.img`
  border-radius: 50%;
  cursor: pointer;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
`;

const Form = styled.form`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1.5rem;
`;

const DiscardButton = styled.button`
  margin: 1rem 0;
  padding: 0.25rem 0.75rem;
  text-decoration: underline;
  font-size: 0.875rem;
  border-radius: 0.75rem;
`;

export default FormPost;
