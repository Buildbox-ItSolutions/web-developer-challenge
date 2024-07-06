import { ChangeEvent, FormEvent, useState } from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { CiImageOff } from "react-icons/ci";
import useFeed from "../../hooks/useFeed";
import { PostProps } from "../../types/types";

export function Form() {
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [image, setImage] = useState<string | null>(null);
    const { createPost } = useFeed();

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
        setName(e.currentTarget?.value);

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setMessage(e.currentTarget?.value);

    const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e?.currentTarget?.files;
        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = () => {
                setImage(reader.result?.toString() || "");
            };
        }
    };

    const clearImage = () => setImage("");
    const clearFields = () => {
        setImage("");
        setName("");
        setMessage("");
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const post: PostProps = {
            id: uuidv4(),
            imageURL: image || "",
            name: name.trim(),
            message: message.trim(),
        };
        createPost(post);
        clearFields();
    };

    return (
        <S.Container>
            <S.FormWrapper onSubmit={onSubmit}>
                <S.ImageArea>
                    <label htmlFor="image">
                        <S.ImageField role="button">
                            {image ? (
                                <img src={image} alt="author" />
                            ) : (
                                <CiImageOff size={23} />
                            )}
                        </S.ImageField>
                    </label>

                    <input
                        type="file"
                        id="image"
                        hidden
                        onChange={onChangeImage}
                    />

                    {image && (
                        <S.TrashButton onClick={clearImage}>
                            <S.TrashIcon />
                        </S.TrashButton>
                    )}
                </S.ImageArea>
                <S.Input
                    placeholder="Digite seu nome"
                    onChange={onChangeName}
                    value={name}
                    type="text"
                />
                <S.Textarea
                    placeholder="Mensagem"
                    maxLength={150}
                    onChange={onChangeMessage}
                    value={message}
                />

                <S.Buttons>
                    <S.CancelButton type="button" onClick={clearFields}>
                        Descartar
                    </S.CancelButton>
                    <S.SubmitButton
                        type="submit"
                        disabled={!name || !message || !image}
                    >
                        Publicar
                    </S.SubmitButton>
                </S.Buttons>
            </S.FormWrapper>
        </S.Container>
    );
}
