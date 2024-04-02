"use client"
import Image from "next/image"
import picture from "@/assets/picture.svg"
import deleteIcon from "@/assets/trash.svg"
import { TagFormPost } from "./style"
import { ChangeEvent, useContext, useState } from "react"
import { PostContext } from "@/context/PostContext"
import { IPost } from "@/interfaces/post.interface"
const FormPost = () => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [namePost, setNamepost] = useState<string>("")
    const [contentPost, setContentpost] = useState<string>("")
    const { addPost } = useContext(PostContext)

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0];
        const url = URL.createObjectURL(file!);

        setSelectedFile(url)
    };

    const handleSubmit = (): void => {
        const newPost: IPost = {
            id: new Date,
            name: namePost,
            content: contentPost,
            image: selectedFile
        }

        addPost(newPost)
        setNamepost("")
        setContentpost("")
        setSelectedFile(null)
    }

    return (
        <TagFormPost>
            <div className="content-picture">
                <label className="picture" htmlFor="file-upload">
                    <Image 
                    src={selectedFile ? selectedFile : picture} 
                    width={24} 
                    height={24} 
                    alt="picture vector" 
                    className={selectedFile ? "picture-active" : ""}
                    />
                </label>
                <Image 
                    onClick={() => setSelectedFile(null)} 
                    src={deleteIcon} 
                    width={24} 
                    height={24} 
                    alt="trash icon button" 
                    className={selectedFile ? "trash-icon-active" : "trash-icon"}
                />
            </div>
            <input
                className="upload-input"
                id="file-upload"
                type="file"
                accept="image/*" 
                onChange={handleFileChange}
                style={{ display: "none" }}
            />
            <form 
                action="" 
                onSubmit={(e) => (e.preventDefault(), handleSubmit())} className="form-add"
                >
                <input 
                    onChange={(e) => setNamepost(e.target.value)} 
                    value={namePost} 
                    type="text" 
                    id="name" 
                    className="form-input-name" 
                    placeholder="Digite seu nome"
                    />
                <textarea 
                    onChange={(e) => setContentpost(e.target.value)} 
                    value={contentPost} 
                    id="content" 
                    className="form-input-message" 
                    placeholder="Mensagem"
                />
                <div className="form-button">
                    <span onClick={() => (setNamepost(""), setContentpost(""))}>Descartar</span>
                    <button 
                        type="submit" 
                        className={namePost.trim() !== "" && contentPost.trim() !== "" ? "send-button-active" : "send-button"} 
                        disabled={namePost.trim() !== "" && contentPost.trim() !== "" ? false : true}
                        >
                            Publicar
                        </button>
                </div>
            </form>
        </TagFormPost>
    )
}

export default FormPost