import { IPost } from "../Interfaces/Ipost";
import { ImageProfile } from "./imageProfile";
import { X } from "lucide-react";

interface ListProps{
  postList: IPost[]
  handleRemove(id: number): void
}

export function List({postList,handleRemove}: ListProps) {
  return(
    <div>

      {postList.length > 0 ? (

        postList.map((post) => (
          <div className="flex flex-col gap-5 w-[516px]  items-center m-auto mt-10 p-8 rounded border border-[#3b3b3b] bg-[#313131]">
            <div className="w-full flex justify-end">
              <button onClick={() =>{handleRemove(post.id)}}>
                <X className="size-4 text-red-500 border rounded-full  border-red-500"/>
              </button>
            </div>
            <div className="flex w-full gap-10 items-center ">
            <ImageProfile/>
            <div>
              <div className="flex flex-col space-y-5">
                <p className="text-slate-50/30">{post.message}</p>
                <div>
                  <p className="text-[#5f5f5f] font-semibold text-sm">Enviado por: </p>
                  <p className="text-slate-50/30 text-sm">{post.name}</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))


      ): ( <p className="text-[#5f5f5f] font-semibold text-xl">Infelizmente ainda não tem posts</p>)}

    </div>
  )

}