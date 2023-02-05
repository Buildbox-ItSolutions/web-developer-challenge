import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/bx-logo.png";
import photoUploadCircle from "../../public/assets/images/photo-upload-circle.png";
import photoIcon from "../../public/assets/images/photo-icon.png";
import { useState } from "react";
import { prisma } from "../server/db";
const Home: NextPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  console.log("🚀 - file: index.tsx:12 - name", name);
  console.log("🚀 - file: index.tsx:14 - message", message);

  async function addNewPost() {
    const newPost = await prisma.posts.create({
      data: {
        name: name,
        message: message,
      },
    });
    console.log("🚀 - file: index.tsx:29 - newPost", newPost);
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
      <main className="flex min-h-screen flex-col items-center justify-start bg-primary pt-10">
        <div className="container flex max-w-lg flex-col items-center gap-2 rounded-sm border border-primary-70 bg-primary-80 p-6">
          <div className="relative cursor-pointer">
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
          <input
            className="w-full rounded-lg bg-primary-60 px-4 py-3 text-primary-30 hover:border-primary-50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-50"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="h-20 w-full resize-none rounded-lg bg-primary-60 p-3 px-4 text-primary-30 hover:border-primary-50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-50"
            placeholder="Mensagem"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex w-full items-center justify-end gap-6 pt-8">
            <Link
              className="text-primary-50 underline hover:border-primary-50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-50"
              href="https://google.com.br"
              target="_blank"
            >
              Descartar
            </Link>
            <button
              className="rounded-lg bg-primary-60 px-6 py-3 text-primary-80 hover:ring-2 hover:ring-primary-50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-50"
              onClick={addNewPost}
            >
              Publicar
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
