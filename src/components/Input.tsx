import { useState, useEffect, useRef } from "react";
import trash from "../assets/trash.png";
import { Feed } from "../components/Feed";
import img1 from "../assets/photo-base.png";

export function Input(props) {
  const [nome, setNome] = useState("");
  const [msg, setMsg] = useState("");
  const [img, setImg] = useState("");

  const feeds = [
    {
      nome,
      msg,
      img,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmitTest({
      nome,
      msg,
    });
    setNome("");
    setMsg("");
  };

  const descartar = (e) => {
    e.preventDefault();
    setNome("");
    setMsg("");
  };

  return (
    <div
      className="w-[516px] h-full bg-[#313131] border border-[#3b3b3b] rounded-[3px]
      mt-[40px] mx-[425px] mb-[56px] p-6"
    >
      <div className="flex">

        
        <button>
          <div
            className="w-[88px] h-[88px] bg-[#4b4b4b] mr-[8px] mb-[16px] ml-[190px]
       object-contain rounded-[36px] border border-[#4b4b4b]"
          >
            <img src={img1} />
          </div>

         
        </button>
        <div className="mt-[30px] ml-[10px]">
          <button>
            <img src={trash} />
          </button>
        </div>
      </div>

      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-[468px] h-[40px] mt-[16px] mb-[8px]
        pt-[12px] pr-[40px] pb-[11px] pl-[16px]
        rounded-[8px] bg-[#494949] text-[#9f9f9f]"
          />

          <input
            type="text"
            name="msg"
            placeholder="Mensagem"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className="w-[468px] h-[80px] mt-[8px] mb-[32px]
         pt-[12px] pr-[40px] pb-[51px] pl-[16px]
         rounded-[8px] bg-[#494949] text-[#9f9f9f]"
          />

          <div className="justify-end items-end flex">
            <button
              type="button"
              onClick={descartar}
              className=" w-[60px] h-[17px] mt-[12px] mr-[px] mb-[12px] ml-[0px]
         text-[14px] underline text-[#5f5f5f] items-center "
            >
              Descartar
            </button>

            <button
              type="submit"
              className="bg-[#5f5f5f] w-[98px] h-[41px] ml-[24px] py-[] px-[]
         object-contain rounded-[8px] text-[#313131]"
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
