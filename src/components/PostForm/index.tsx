import { PostImg, PostImgContainer, PostContainer } from "../../styles/global";
import PlaceHolder from "../../assets/place-holder.svg";
import TrashCan from "../../assets/trash.svg";
import { DiscardButton, PostImgDelIcon, PostInput, PostTextArea, PublishDisabledButton, PublishEnabledButton } from "./styles";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { PostInterface } from "../../interfaces/PostInterface";
import { dataStore } from "../../data/data";

export function PostForm() {
    const [img, setImg] = useState(PlaceHolder);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [enabled, setEnabled] = useState(false);
    const inputFile = useRef<HTMLInputElement>(null) 

    const openDialog:any = () => {
        inputFile?.current?.click();
    }
    const setPreview = (e:ChangeEvent<HTMLInputElement>) => {
        const file: File = e.target.files![0]
        let url = URL.createObjectURL(file);
        setImg(url);
        e.target.value = ""
    }
    const discard = () => {
        setImg(PlaceHolder);
        setContent("");
        setName("");
    }
    const discardImg = () => {
        setImg(PlaceHolder);
    }
    const handleName = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleContent = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }
    useEffect(() => {
        if (content.length>0 && name.length>0) {
            setEnabled(true);
        }else{
            setEnabled(false);
        }
    }, [content,name]);
    const publish = () => {
        let newPost:PostInterface = {
            content: content,
            img: img,
            name: name
        }
        dataStore.addPost(newPost);
        discard()
    }
    return(
        <PostContainer className="mt-4 mb-5 p-4 d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex align-items-center position-relative">
                <PostImgContainer onClick={openDialog}>
                    <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={setPreview}/>
                    <PostImg src={img}/>
                </PostImgContainer>
                {img===PlaceHolder?null:<PostImgDelIcon className="ms-3" onClick={discardImg} src={TrashCan}/>}
                
            </div>
            <PostInput className="mt-4 w-100" placeholder="Digite seu nome" value={name} onChange={handleName}/>
            <PostTextArea className="mt-2 w-100" placeholder="Mensagem" value={content} onChange={handleContent} />
            <div className="d-flex justify-content-end mt-4 w-100">
                <DiscardButton className="me-4" onClick={discard}>
                    <span>Descartar</span>
                </DiscardButton>
                {enabled?
                <PublishEnabledButton onClick={publish}>
                    <span>Publicar</span>
                </PublishEnabledButton>
                :
                <PublishDisabledButton>
                    <span>Publicar</span>
                </PublishDisabledButton>}
                
            </div>
        </PostContainer>
    )    
}