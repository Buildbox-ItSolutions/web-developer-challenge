import img1 from "../assets/photo-base.png";
import img2 from "../assets/delete.png";


export function Feed(props) {
  

  return (
    <div
    className="bg-[#313131] w-[516px] h-full
    mt-[8px] mx-[425px] mb-[16px] pt-[12px] pr-[12px] pb-[32px] pl-[24px]
    rounded-[3px] border border-[#3b3b3b]"
    >
      
      <div className="flex justify-end">
        <button>
      <img src={img2} />

        </button>
      </div>

      <div className="flex">
        <div
          className="w-[88px] h-[88px]
        mt-[24px] mr-[32px] mb-[16px] ml-[0px]
        object-contain rounded-[36px]"
        >
          <img src={img1} />
        </div>
      <div>
        <div className="w-[348px] h-[80px]
        mt-[20px] mr-[12px] mb-[24px] ml-[]
        text-[#9f9f9f] ">{props.msg}
          </div>

        <div className="flex flex-col text-[12px] text-[#5f5f5f]
        mt-[30px] mr-[] mb-[2px] ml-[]">
          Enviado por
          <span className="text-[14px] text-[#7a7a7a] ">{props.nome}</span>
        </div>
      </div>
      </div>
    </div>
  );
}
