"use client"; 

import { v4 as uuidv4 } from 'uuid';
import { AnyARecord } from "dns";
import Image from "next/image";
import { useRef, useState } from "react";
import Post from './model/Post';
import FeedPost from './components/FeedPost';

export default function Home() {

  const imageUploadRef = useRef(null);
  
  const [username, setUsername] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<any>("");

  const [posts, setPosts] = useState<Post[]>([]);

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

  const handleImageClick = () => {
    imageUploadRef.current.click();
  };

  const handleUsernameChange = (e: any) => setUsername(e.target.value);
  const handleTextChange = (e: any) => setText(e.target.value);

  const submitPost = () => {

    if(username === "" || text === "") {
      return;
    }

    let id = uuidv4();
    setPosts([...posts, { id: id, author: username, text: text, image: imagePreview }]);
    setImagePreview("");
    setUsername("");
    setText("");
  }

  return (
    <main className="flex relative min-h-screen flex-col gap-y-16 items-center p-8 md:p-24 bg-gray-2">
      <input ref={imageUploadRef} className="hidden invisible" type="file" name="avatar" accept=".jpef, .png, .jpg" onChange={handleImageChange}/>

      <div className="fixed py-6 top-0 w-full bg-gray-4">
        <p className="my-auto font-extrabold text-center text-2xl text-lime-500">buildbox</p>
        <p className="font-light text-neutral-500 text-center text-xs">WEB CHALLENGE</p>
      </div>

      <div className="w-full flex flex-col gap-y-16">

        <div id="formContainer" className="mx-auto mt-8 border-[1px] border-gray-1 bg-gray-3 w-full md:w-2/5 h-fit p-8 flex flex-col gap-y-4">
          
          <div className="mx-auto bg-opacity-0">
            <div onClick={handleImageClick} className="w-32 h-32 flex rounded-full border-[1px] border-neutral-500 cursor-pointer">
              { imagePreview == "" 
                ? <Image src="/landscape-focus-svgrepo-com.svg" alt="Image placeholder" className="mx-auto" width={64} height={64} priority/>
                : <Image src={imagePreview} alt="User avatar" className="rounded-full object-cover" width={128} height={128} />
              }
            </div>
            { imagePreview != "" && <Image src="/trash-1-svgrepo-com.svg" alt="Image placeholder" width={32} height={32} priority/> }
          </div>


          <input type="text" placeholder="Digite seu nome" 
            className="text-white text-sm outline-none bg-gray-1 p-2 rounded-md" 
            value={username} onChange={handleUsernameChange}/>

          <textarea placeholder="Mensagem" 
            className="text-white text-sm outline-none bg-gray-1 p-2 rounded-md"
            value={text} onChange={handleTextChange}/>

          <div className="mt-4 ml-auto flex gap-x-4">
            <a className="my-auto text-sm underline text-gray-1 cursor-pointer">Descartar</a>
            <button onClick={submitPost} className="text-sm text-white bg-lime-500 px-4 py-2 rounded-lg">Publicar</button>
          </div>

        </div>

        <div id="feed" className="mx-auto flex flex-col w-full md:w-2/5">
            <p className="text-gray-0 text-sm font-bold mb-2">Feed</p>
            <div className="flex flex-col gap-y-4">
              { posts.map(post => <FeedPost id={post.id} author={post.author} image={post.image} text={post.text} key={post.id}/>) }
            </div>
        </div>
      </div>
    </main>
  );
}
