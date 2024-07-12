'use client'
import { Post } from '@/action/post'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GoXCircle } from 'react-icons/go'

export const GetPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postInstance = new Post()
    const allPosts = postInstance.GetPosts()
    if (allPosts) {
      setPosts(allPosts)
    }
  }, [])

  return (
    <div className="max-w-[600px] mx-auto mt-10 text-zinc-500">
      <p>Feed</p>
      <div className="min-h-52 bg-zinc-750 max-w-[600px] mx-auto  border border-zinc-600 rounded-md flex flex-col">
        <GoXCircle className="w-5 h-5 self-end mr-4 mt-2 font-thin text-trash cursor-pointer" />
        <div className="flex items-start w-[90%] justify-around">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNj_60Q6bbDcOR27keAVB7M1-2xEqxjaOCw&usqp=CAU"
            width={120}
            height={120}
            alt="Imagem do user"
            className="w-28 h-28 rounded-[40px]"
          />
          <div className="w-[70%] space-y-5">
            <p className="text-zinc-400 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deserunt, necessitatibus. Aliquid neque veniam sapiente quos qui
              consectetur ad natus reprehenderit nam modi eveniet nemo molestias
              laboriosam dicta, cupiditate pariatur cum?
            </p>
            <div className="">
              <p className="text-xs text-zinc-550">Enviado por</p>
              <p className="text-sm text-zinc-500 mb-8">Manuela Oliveira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
