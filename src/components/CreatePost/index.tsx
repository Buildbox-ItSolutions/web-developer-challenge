import { FormEvent, useEffect, useState, useRef } from "react";
import * as C from "./style";

export default function CreatePost(props: any) {
    const inputRef = useRef<any>(null);
    const [image, setImage] = useState<any>();
    const [showPreview, setShowPreview] = useState(false);

    const handlePreviewImage = (event: any) => {
        const image = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
            setShowPreview(true);
        }

        if (image) {
            reader.readAsDataURL(image);
        } else {
            setShowPreview(false);
        }
    };

    return (
        <C.CreatePostArea method="POST" onSubmit={props.HandleSubmit}>
            <C.ImageUploadArea title="Upload your avatar">
                <C.ImageUpload
                    type="file"
                    name="image"
                    accept=".png, .jpeg, .jpg"
                    ref={inputRef}
                    onChange={handlePreviewImage}
                />
                <C.ImageUploadIcon src={showPreview ? image : "/image.png"} />
            </C.ImageUploadArea>

            <C.InputName
                type="text"
                placeholder="Digite seu nome"
                value={props.Name}
                onChange={props.HandleName}
            />
            <C.InputMessage
                placeholder="* Mensagem (Máximo 170 caracteres)"
                value={props.Message}
                onChange={props.HandleMessage}
            />
            <div>
                {props.Warning && <C.Warning> Por favor, deixe uma mensagem para prosseguir.</C.Warning>}
                {props.Upload && <C.Uploading>Enviando comentário...</C.Uploading>}
                <C.Discart onClick={() => {
                    props.HandleDiscart();
                    setShowPreview(false);
                    inputRef.current.value = null;
                }}>
                    Descartar
                </C.Discart>
                <C.SubmitButton type="submit" color={props.ButtonColor} value="Publicar" />
            </div>
        </C.CreatePostArea>
    )
}