import Image from "next/image";
import Post from "../model/Post";

interface PostProps {
    post: Post;
    postDeletedHandler: (post: Post) => void;
}

export default function FeedPost({post, postDeletedHandler}: PostProps) {

    return (
    <div className="w-full h-fit border-[1px] border-gray-1 bg-gray-3">

        <div className='p-3 flex justify-end'>
            <Image src="/close-circle-svgrepo-com.svg" alt="Image placeholder" className="cursor-pointer" onClick={_ => postDeletedHandler(post)} width={24} height={24} priority />    
        </div>

        <div className="mx-auto h-full md:flex flex-col md:flex-row md:ml-0 md:gap-x-8 md:px-8 md:pb-8 md:pt-4 gap-x-4 px-4 pb-4 pt-2">
            <div className="w-full md:w-1/5 flex justify-center md:justify-start md:ml-0">
                <div className="w-24 h-24 flex rounded-full border-[1px] border-neutral-500">
                    { post.image == "" 
                        ? <Image src="/user-5-svgrepo-com.svg" alt="Image placeholder" className="mx-auto" width={64} height={64} priority/>
                        : <Image src={post.image} alt="User avatar" className="rounded-full object-cover" width={128} height={128} />
                    }
                </div>
            </div>
        <div className='h-auto flex flex-col justify-between md:w-4/5 w-full md:mt-0 mt-4'>
            <p className="md:text-left text-center text-neutral-400">{post.text}</p>
            <p className='md:text-left text-center text-xs font-semibold text-gray-0 mt-4'>
                Enviado por <br/>
                <span className='text-sm font-light text-neutral-400'>{post.author}</span>
            </p>
        </div>
    </div>
  </div>
  )

}