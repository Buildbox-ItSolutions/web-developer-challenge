import { ChangeEvent, useRef, useState } from "react";
import { PostProps } from "../post"
import ImageInput from "../image-upload";

export type PostDraftProps = {
    Publish: (post: PostProps) => void
}

export default function PostDraft(props: PostDraftProps) {
    const [draft, setDraft] = useState<PostProps>({
        Id: "",
        Image64: "data:image/jpeg;base64",
        Message: "",
        SentBy: ""
    });

    function discard() {
        setDraft({
            Id: "",
            Image64: "data:image/jpeg;base64",
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

    function handleChangeMessage(e: ChangeEvent<HTMLInputElement>) {
        setDraft({
            ...draft,
            Message: e.target.value
        })
    }

    function handlePublish() {
        props.Publish(draft);
        discard();
    }

    return (
        <section id="post-draft">
            <ImageInput Img={draft.Image64} HandleChangeImage={handleChangeImage} />
            <input
                value={draft.SentBy}
                type="text"
                placeholder="Digite seu nome"
                onChange={handleChangeName}
            />
            <input
                value={draft.Message}
                type="text"
                placeholder="Mensagem"
                onChange={handleChangeMessage}
            />
            <button id="discard" onClick={discard}>Descartar</button>
            <button id="publish" onClick={handlePublish}>Publicar</button>
        </section>
    )
}   