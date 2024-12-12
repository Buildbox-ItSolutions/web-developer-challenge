import { DeletarPost } from "@/app/lib/Action";
import Image from "next/image";

interface Props {
  post: {
    desc: string;
    slug: number;
    createdAt: Date;
    src: string;
    autor: string;
  };
}

export default function PostLeitura(props: Props) {
  return (
    <div className="border-4 bg-verdeM dark:bg-azulM border-rosaM dark:border-amareloM w-4/5 flex gap-6 rounded-xl p-2 text-sm md:w-full lg:w-4/5 lg:p-12 lg:gap-12 lg:text-xl">
      <div className="mt-4 ml-2">
        <div className="relative w-24 h-24 lg:w-36 lg:h-36">
          <Image
            className="rounded-full"
            alt=""
            fill
            src={`/icone${props.post.src}.jpg`}
          />
        </div>
      </div>
      <div>
        <p>{props.post.desc}</p>
        <p>Autor: {props.post.autor}</p>
        <p>Enviado em: {props.post.createdAt.toLocaleString()}</p>
        <form action={DeletarPost}>
          <input
            className="hidden"
            type="text"
            defaultValue={props.post.slug}
            name="slug"
          />
          <button
            className="border-4 border-rosaC dark:border-amareloC p-2 mt-2 rounded-full lg:mt-12"
            type="submit"
          >
            Deletar
          </button>
        </form>
      </div>
    </div>
  );
}
