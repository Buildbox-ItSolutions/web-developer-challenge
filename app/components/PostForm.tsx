import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import { useRef, useState } from "react";
import Post from "../model/Post";

interface PostFormProps {
    postSubmitedHandler: (post: Post) => void;
}

export default function PostForm({
    postSubmitedHandler
}: PostFormProps) {

    const imageUploadRef = useRef(null);

    const [username, setUsername] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [imagePreview, setImagePreview] = useState<any>("");

    const handleImageClick = () => {
        imageUploadRef.current.click();
    };

    const submit = () => {
        if(username === "" || text === "") {
            return;
          }
          let id = uuidv4();
          postSubmitedHandler({ id: id, author: username, text: text, image: imagePreview });
          setImagePreview("");
          setUsername("");
          setText("");
    }

    const handleUsernameChange = (e: any) => setUsername(e.target.value);

    const handleTextChange = (e: any) => setText(e.target.value);

    const handleImageChange = (e: any) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        if (reader !== undefined && file !== undefined) {
            reader.onloadend = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div>
            <input title="File input" ref={imageUploadRef} className="hidden invisible" type="file" name="avatar" accept=".jpef, .png, .jpg" onChange={handleImageChange} />

            <div id="formContainer" className="mx-auto mt-8 border-[1px] border-gray-1 bg-gray-3 w-full md:w-2/5 h-fit p-8 flex flex-col gap-y-4">

                <div className="mx-auto bg-opacity-0">
                    <div onClick={handleImageClick} className="w-32 h-32 flex rounded-full border-[1px] border-neutral-500 cursor-pointer">
                        {imagePreview == ""
                            ? <Image src="/landscape-focus-svgrepo-com.svg" alt="Image placeholder" className="mx-auto" width={64} height={64} priority />
                            : <Image src={imagePreview} alt="User avatar" className="rounded-full object-cover" width={128} height={128} />
                        }
                    </div>
                    {imagePreview != "" && <Image src="/trash-1-svgrepo-com.svg" alt="Image placeholder" width={32} height={32} priority />}
                </div>


                <input type="text" placeholder="Digite seu nome"
                    className="text-white text-sm outline-none bg-gray-1 p-2 rounded-md"
                    value={username} onChange={handleUsernameChange} />

                <textarea placeholder="Mensagem"
                    className="text-white text-sm outline-none bg-gray-1 p-2 rounded-md"
                    value={text} onChange={handleTextChange} />

                <div className="mt-4 ml-auto flex gap-x-4">
                    <a className="my-auto text-sm underline text-gray-1 cursor-pointer">Descartar</a>
                    <button onClick={submit} className="text-sm text-white bg-lime-500 px-4 py-2 rounded-lg">Publicar</button>
                </div>

            </div>

        </div>
    )

}