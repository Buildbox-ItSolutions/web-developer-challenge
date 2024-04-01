"use client"
import Image from "next/image"
import deleteIcon from "@/assets/delete.svg"
import profilePicture from "@/assets/photo-base.jpg"
import { TagCard } from "./style"

const CardPost = () => {
    return (
        <TagCard>
            <div className="options-post">
                <button>
                    <Image src={deleteIcon} width={20} height={20} alt="delete post icon"/>
                </button>
            </div>
            <div className="content-post">
                <Image src={profilePicture} width={88} height={88} alt="picture vector" className="picture"/>
                <p>necessitatibus esse assumenda Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aut vitae ratione aliquam amet ex commodi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque acçs akcçasmcçacaçcnmçask cnaçknçacknçask  açkscnaçs adçcknaçsçakscnçacskn asçkcaçskn çaska</p>
            </div>
            <div className="profile-post">
                <span>Enviado por</span>
                <p>Manuela Oliveira</p>
            </div>
        </TagCard>
    )
}

export default CardPost