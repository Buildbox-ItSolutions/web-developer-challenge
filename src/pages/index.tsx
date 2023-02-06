import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/assets/images/bx-logo.png";
import photoUploadCircle from "../../public/assets/images/photo-upload-circle.png";
import photoIcon from "../../public/assets/images/photo-icon.png";
import { useState } from "react";
import type { PostType } from "../types/post";
import Post from "../components/Post";
import UserImage from "../components/UserImage";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<File | undefined>();
  const [Posts, setPosts] = useState<PostType[]>([]);

  function addNewPost() {
    if (!name || !message || !photo) return;

    const id = Math.floor(Math.random() * Date.now());
    setPosts([{ id, photo, name, message }, ...Posts]);
    clearPost();
  }

  function getPhoto() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = ({ target }: Event) => {
      const files = (target as HTMLInputElement)?.files;
      if (!files) return;
      setPhoto(files[0]);
    };
    input.click();
  }

  function clearPost() {
    setName("");
    setMessage("");
    setPhoto(undefined);
  }

  return (
    <>
      <Head>
        <title>Buildbox Web Challenge</title>
        <meta name="description" content="Buildbox Web Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex flex-wrap items-center justify-center bg-primary-90 p-6">
        <Image
          width={100}
          height={100}
          src={Logo}
          alt="buildbox Web Challenge"
        />
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-start gap-14 bg-primary px-3 py-10">
        <div className="container flex max-w-lg flex-col items-center gap-2 rounded-sm border border-primary-70 bg-primary-80 p-6">
          <div className="relative cursor-pointer">
            {photo ? (
              <UserImage
                trash
                photo={photo}
                addPhoto={getPhoto}
                removePhoto={() => setPhoto(undefined)}
              />
            ) : (
              <div onClick={getPhoto}>
                <Image
                  width={88}
                  height={88}
                  src={photoUploadCircle}
                  alt="Photo Upload Circle"
                  className="mb-4"
                />
                <Image
                  width={24}
                  height={24}
                  src={photoIcon}
                  alt={"Photo Icon"}
                  className="absolute top-8 left-8"
                />
              </div>
            )}
          </div>
          <input
            className="w-full rounded-lg bg-primary-60 px-4 py-3 text-white placeholder:text-primary-30 hover:border-primary-50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-50"
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="h-24 w-full resize-none rounded-lg bg-primary-60 px-4 py-2 text-white placeholder:text-primary-30 hover:border-primary-50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-50"
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex w-full items-center justify-end gap-6 pt-8">
            <p
              className="cursor-pointer text-primary-50 underline hover:border-primary-50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-50"
              onClick={() => clearPost()}
            >
              Descartar
            </p>
            <button
              className={`rounded-lg bg-primary-60 px-6 py-3 text-primary-80 hover:ring-2 hover:ring-primary-50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-50 ${
                photo && name && message ? "bg-green" : ""
              }`}
              onClick={addNewPost}
              disabled={!(photo && name && message)}
            >
              Publicar
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-[512px]">
            <p className="w-full self-start text-primary-40">Feed</p>
          </div>
          {Posts?.map((post) => (
            <Post
              key={post.id}
              value={post}
              removePost={() => {
                setPosts(Posts.filter((p) => p.id !== post.id));
              }}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
