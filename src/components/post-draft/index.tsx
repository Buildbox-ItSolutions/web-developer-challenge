import { ChangeEvent, useRef, useState } from "react";
import { PostProps } from "../post"
import logo from '../../logo.svg';

export type PostDraftProps = {
    Publish: (post: PostProps) => void
}

export default function PostDraft(props: PostDraftProps) {
    const [draft, setDraft] = useState<PostProps>({
        Image64: "data:image/jpeg;base64" + logo,
        Message: "",
        SentBy: ""
    });

    function discard() {
        setDraft({
            Image64: logo,
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
            <input
                type="file"
                onChange={handleChangeImage}
                style={{ display: "none" }}
            />
            <img src={draft.Image64} />
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