'use client'
import { usePostStatus } from '@/hook/postStatusContext'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Delete } from './delete'
import { getPosts } from '@/function/getPost'

type PostType = {
  image: string
  name: string
  message: string
  id: string
}

export const GetPost = () => {
  const { postAdded, setPostAdded } = usePostStatus()
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    const data = getPosts()
    setPosts(data)
    setPostAdded(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (postAdded) {
      const data = getPosts()
      setPosts(data)
      setPostAdded(false)
    }
  }, [postAdded, setPostAdded])
  return (
    <div className="max-w-[600px] mx-auto mt-10 text-zinc-500 transition duration-500">
      <p>Feed</p>
      <div className="space-y-4 mt-2">
        {posts &&
          posts.length > 0 &&
          posts.map((post, index) => (
            <div
              className="h-auto bg-zinc-750 max-w-[600px] mx-auto border border-zinc-600 rounded-md flex flex-col"
              key={index}
            >
              <Delete id={post.id} />
              <div className="flex items-start w-full justify-around mt-2">
                <Image
                  src={post.image}
                  alt="Imagem do post"
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-[40px] mb-4"
                />
                <div className="w-[70%] max-md:w-[60%] space-y-5 pr-4">
                  <p className="text-zinc-400 text-justify text-wrap w-full h-auto break-words">
                    {post.message}{' '}
                  </p>
                  <div className="">
                    <p className="text-xs text-zinc-550">Enviado por</p>
                    <p className="text-sm text-zinc-500 mb-4">{post.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
