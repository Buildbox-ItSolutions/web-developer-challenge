import { ChangeEvent, useRef, useState } from "react";
import { PostProps } from "../post"
import ImageInput from "../image-upload";
import styled from "styled-components";

export type PostDraftProps = {
    Publish: (post: PostProps) => void
}

const Section = styled.section`
    border: 1px solid #3B3B3B;
    border-radius: 2px;
    background-color: #313131;
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
`;

const StyledInput = styled.input`
    background: #494949;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    width: 90%;
    margin-bottom: 6px;

    color: #F9F9F9;
`;

const StyledTextarea = styled.textarea`
    background: #494949;
    border: none;
    border-radius: 4px;
    resize: none;

    padding: 0.5rem;
    height: 5rem;
    width: 90%;

    color: #F9F9F9;
`;

const DiscardButton = styled.button`
    background: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;

    color: #5F5F5F;
`

const PublishButton = styled.button`
    background: #71BB00;
    border: none;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    
    color: #FFFFFF;
    
    &:disabled {
        background: #5a9404;
        cursor: not-allowed;
    }
`

const ButtonArea = styled.span`
    margin: 1rem;

    align-self: end;
`;

export default function PostDraft(props: PostDraftProps) {
    const [draft, setDraft] = useState<PostProps>({
        Id: "",
        Image64: "",
        Message: "",
        SentBy: ""
    });

    const canPublish = (!draft.Message || !draft.SentBy || !draft.Image64);

    function discard() {
        setDraft({
            Id: "",
            Image64: "",
            Message: "",
            SentBy: ""
        })
    }

    function handleChangeImage(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.item(0);

        if (!file) return;

        setDraft({
            ...draft,
            Image64: URL.createObjectURL(file)
        })
    }

    function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
        setDraft({
            ...draft,
            SentBy: e.target.value
        })
    }

    function handleChangeMessage(e: ChangeEvent<HTMLTextAreaElement>) {
        setDraft({
            ...draft,
            Message: e.target.value
        })
    }

    function handlePublish() {
        if (!draft.Message || !draft.SentBy || !draft.Image64) return;

        props.Publish(draft);
        discard();
    }

    return (
        <Section>
            <ImageInput
                Img={draft.Image64}
                HandleChangeImage={handleChangeImage}
            />
            <StyledInput
                value={draft.SentBy}
                type="text"
                placeholder="Digite seu nome"
                onChange={handleChangeName}
            />
            <StyledTextarea
                value={draft.Message}
                placeholder="Mensagem"
                onChange={handleChangeMessage}
            />
            <ButtonArea>
                <DiscardButton id="discard" onClick={discard}>Descartar</DiscardButton>
                <PublishButton disabled={canPublish} id="publish" onClick={handlePublish}>Publicar</PublishButton>
            </ButtonArea>
        </Section>
    )
}