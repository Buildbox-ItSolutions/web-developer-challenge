"use client"
import Image from "next/image"
import deleteIcon from "@/assets/delete.svg"
import profilePicture from "@/assets/photo-base.jpg"
import picture from "@/assets/picture.svg"
import { TagCard } from "./style"
import { useContext } from "react"
import { PostContext } from "@/context/PostContext"

const CardPost = (
    {id, name, content, image}: 
    {id: Date, name: string, content: string, image: string | null}
    ) => 
{
    
    const { deletePost} = useContext(PostContext)

    return (
        <TagCard>
            <div className="options-post">
                <button onClick={()=> deletePost(id)}>
                    <Image src={deleteIcon} width={20} height={20} alt="delete post icon"/>
                </button>
            </div>
            <div className="content-post">
                {image ?

                    <Image 
                        src={image} 
                        width={88} 
                        height={88} 
                        alt="picture vector" 
                        className="picture"
                    />
                    :
                    <div className="picture-default">
                        <Image
                            src={picture}
                            width={24} 
                            height={24}
                            alt="default image"
                        />
                    </div>
                }
                <p>{content}</p>
            </div>
            <div className="profile-post">
                <span>Enviado por</span>
                <p>{name}</p>
            </div>
        </TagCard>
    )
}

export default CardPost