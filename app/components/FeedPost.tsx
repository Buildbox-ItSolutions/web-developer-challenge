import Image from "next/image";
import Post from "../model/Post";

export default function FeedPost({author, text, image}: Post) {

    return (
    <div className="w-full h-fit border-[1px] border-gray-1 bg-gray-3">
        <div className="mx-auto h-full flex gap-x-8 p-8">
            <div className="w-24 h-24 flex rounded-full border-[1px] border-neutral-500">
            { image == "" 
                ? <Image src="/user-5-svgrepo-com.svg" alt="Image placeholder" className="mx-auto" width={64} height={64} priority/>
                : <Image src={image} alt="User avatar" className="rounded-full object-cover" width={128} height={128} />
            }
        </div>
        <div className='h-auto flex flex-col justify-between'>
            <p className="text-neutral-400">{text}</p>
            <p className='text-xs font-semibold text-gray-0 mt-4'>
                Enviado por <br/>
                <span className='text-sm font-light text-neutral-400'>{author}</span>
            </p>
        </div>
    </div>
  </div>
  )

}