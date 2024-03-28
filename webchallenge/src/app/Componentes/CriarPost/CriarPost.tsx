import Image from "next/image";
import { EnviarPost } from "../../lib/Action";

export default async function CriarPost() {
  const slug = Math.floor(Math.random() * 100000000000) + 1;

  const randomImage = Math.floor(Math.random() * 4) + 1;
  const treatedRandomImage = randomImage.toString();

  return (
    <div className="border-4 bg-verdeM dark:bg-azulM border-rosaM dark:border-amareloC rounded-2xl flex flex-col w-4/5 mb-6 md:w-3/5 lg:w-1/4">
      <form
        className="flex flex-col pt-4 gap-4  justify-center items-center"
        action={EnviarPost}
      >
        <div className="relative w-24 h-24">
          <Image
            className="rounded-full"
            alt=""
            fill
            src={`/icone${treatedRandomImage}.jpg`}
          />
        </div>
        <input
          className=" bg-verdeC dark:bg-azulC text-center w-4/5 rounded-lg"
          type="text"
          name="desc"
          placeholder="Mensagem"
        />
        <input className="hidden" type="text" name="slug" defaultValue={slug} />
        <input
          className="hidden"
          type="text"
          name="src"
          defaultValue={treatedRandomImage}
        />
        <input
          className=" bg-verdeC dark:bg-azulC text-center w-4/5 rounded-lg"
          type="text"
          name="autor"
          placeholder="Autor"
        />
        <input
          className="border-4 border-rosaC dark:border-amareloC rounded-2xl p-2 "
          type="submit"
          placeholder="Enviar"
        />
        <button className="mb-4" type="reset">
          Descartar
        </button>
      </form>
    </div>
  );
}
