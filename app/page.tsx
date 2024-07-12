"use client"; 

import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {

  const [imagePreview, setImagePreview] = useState<any>("");
  const imageUploadRef = useRef(null);

  const handleImageChange = (e: any) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file);
    }
  }

  const handleImageClick = () => {
    imageUploadRef.current.click();
  };

  return (
    <main className="flex relative min-h-screen flex-col items-center p-8 md:p-24 bg-neutral-700">

      <div className="fixed py-6 top-0 w-full bg-neutral-800">
        <p className="my-auto font-extrabold text-center text-2xl text-lime-500">buildbox</p>
        <p className="font-light text-neutral-500 text-center text-xs">WEB CHALLENGE</p>
      </div>

      <div className="mt-8 border-[1px] border-neutral-700 bg-neutral-900 w-full md:w-1/2 h-fit p-8 flex flex-col gap-y-4">
        
        <div className="mx-auto bg-opacity-0 w-32 h-32 rounded-full border-[1px] border-neutral-500" onClick={handleImageClick}>
          { imagePreview == "" 
            ? <Image src="/landscape-focus-svgrepo-com.svg" alt="Image placeholder" width={64} height={64} priority/>
            : <Image src={imagePreview} alt="User avatar" className="rounded-full object-cover" width={128} height={128} />
          }
          <input ref={imageUploadRef} className="hidden" type="file" name="avatar" accept=".jpef, .png, .jpg" onChange={handleImageChange}/>
        </div>


        <input type="text" placeholder="Digite seu nome" className="text-sm outline-none bg-neutral-800 p-2 rounded-md"/>
        <textarea placeholder="Mensagem" className="text-sm outline-none bg-neutral-800 p-2 rounded-md"/>

        <div className="mt-4 ml-auto flex gap-x-4">
          <a className="my-auto text-sm underline text-neutral-600 cursor-pointer">Descartar</a>
          <button className="text-sm text-white bg-green-500 px-4 py-2 rounded-lg">Publicar</button>
        </div>

      </div>

    </main>
  );
}
