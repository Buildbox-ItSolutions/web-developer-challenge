import Image from "next/image";
import CriarPost from "./Componentes/CriarPost/CriarPost";
import PostLeitura from "./Componentes/PostLeitura/PostLeitura";
import TodosPosts from "./Componentes/TodosPosts/TodosPosts";
import ThemeSelector from "./Componentes/ThemeSelector/ThemeSelector";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <ThemeSelector />
      <CriarPost />
      <h3 className="mb-2">Feed</h3>

      <div className="w-full md:w-1/3">
        <TodosPosts />
      </div>
    </div>
  );
}
