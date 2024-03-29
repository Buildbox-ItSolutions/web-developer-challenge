"use client"
import { FormEvent, FormHTMLAttributes, useContext, useState } from "react";
import { ButtonRemoveImage, FormContainer, FormContainerImage } from "./formStyled";
import ButtonSecondary from "../button-secondary/button-secondary";
import ButtonPrimary from "../button-primary/button-primary";
import Input from "../input/input";
import { ContainerButtons } from "./formStyled";
import { PostProps } from "../post/post";
import TextArea from "../text-area/text-area";
import { InputPrimary } from "../input/inputStyled";
import Avatar from "../avatar/avatar";
import Image from "next/image";
import { ContextPost } from "@/app/context/ContextPost";
import { generateUUID } from "@/app/utils/generate-uuid";
import TrashIcon from "../../../public/trash.svg";



interface FormProps extends FormHTMLAttributes<HTMLFormElement> { }
const Form = ({ ...props }: FormProps) => {

    const { posts, setPosts } = useContext(ContextPost);

    const defaultValuePost = {
        id: "",
        name: "",
        message: "",
        imageUrl: ""
    }

    const [post, setPost] = useState<PostProps>(defaultValuePost);
    const handleSubmitForm = (event: FormEvent) => {
        event.preventDefault();
        const { id, name, message, imageUrl } = post;
        if (!name || !message || !imageUrl) {
            return;
        }

        setPosts(posts => ([{
            ...post,
            id: generateUUID(),
        }, ...posts]))
        setPost(defaultValuePost);
    }

    const handleDescartPost = () => {
        setPost(defaultValuePost)
    }

    const handleImageUpload = (event: any) => {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setPost(post => ({ ...post, imageUrl: imageUrl }))
    };

    const handleRemoveImage = () => {
        setPost(post => ({
            ...post, imageUrl: ""
        }))
    };

    return (
        <FormContainer onSubmit={handleSubmitForm}>
            <FormContainerImage>
                <label htmlFor="photo">
                    {post.imageUrl ? (
                        <Avatar>
                            <Image
                                src={post.imageUrl}
                                fill
                                alt="Avatar"
                            />

                        </Avatar>
                    ) : (
                        <Avatar>
                            <Image
                                src="/image-avatar-fallback.svg"
                                width={24}
                                height={24}
                                alt="Avatar"
                            />
                        </Avatar>
                    )}

                </label>
                {post.imageUrl ? (
                    <ButtonRemoveImage onClick={handleRemoveImage}>
                        <Image
                            src="/trash.svg"
                            width={24}
                            height={24}
                            alt="Trash icon"
                        />
                    </ButtonRemoveImage>
                ): (
                        <InputPrimary
                            type="file"
                            id="photo"
                            onChange={handleImageUpload}
                        />
                )}

  

            </FormContainerImage>


            <Input
                placeholder="Digite seu nome"
                value={post.name}
                onChange={e => setPost(post => ({ ...post, name: e.target.value }))}
            />
            <TextArea
                placeholder="Messagem"
                value={post.message}
                onChange={e => setPost(post => ({ ...post, message: e.target.value }))}
            />

            <ContainerButtons>
                <ButtonSecondary onClick={handleDescartPost}>Descartar</ButtonSecondary>
                <ButtonPrimary type="submit">Publicar</ButtonPrimary>
            </ContainerButtons>

        </FormContainer>
    );
}

export default Form;