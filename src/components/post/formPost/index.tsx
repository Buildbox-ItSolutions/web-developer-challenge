"use client"
import Image from "next/image"
import picture from "@/assets/picture.svg"
import { TagFormPost } from "./style"
const FormPost = () => {
    return (
        <TagFormPost>
            <button className="picture">
                <Image src={picture} width={24} height={24} alt="picture vector"/>
            </button>
            <form action="" className="form-add">
                <input type="text" className="form-input-name" placeholder="Digite seu nome"/>
                <input type="text" className="form-input-message" placeholder="Mensagem"/>
                <div className="form-button">
                    <span>Descartar</span>
                    <button>Publicar</button>
                </div>
            </form>
        </TagFormPost>
    )
}

export default FormPost