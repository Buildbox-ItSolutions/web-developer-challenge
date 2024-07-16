'use client'

import { uniqueId } from '@/function/uniqueId'
import { usePostStatus } from '@/hook/postStatusContext'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { GoFileMedia } from 'react-icons/go'
import { LuTrash } from 'react-icons/lu'

export const CreatePost = () => {
  const { setPostAdded } = usePostStatus()
  const [img, setImg] = useState('')
  const [data, setData] = useState({
    image: '',
    name: '',
    message: '',
    id: '',
  })

  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files && target.files.length > 0) {
      const file = target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setImg(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    return () => {
      if (data.image) {
        URL.revokeObjectURL(data.image)
      }
    }
  }, [data.image])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    const newId = uniqueId()

    setData((prevData) => ({
      ...prevData,
      [name]: value,
      id: newId,
      image: img,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()

    if (data.image && data.message && data.name) {
      const postDataString = JSON.stringify(data)
      localStorage.setItem(`post_${data.id}`, postDataString)
      setPostAdded(true)
      handleClear(e)
    }
  }

  const handleClear = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    setData({
      image: '',
      name: '',
      message: '',
      id: '',
    })
    setImg('')
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="h-96 bg-zinc-750 max-w-[600px] mx-auto mt-10 border border-zinc-600 rounded-md flex flex-col items-center justify-center"
      >
        <div className="h-[40%] w-full flex items-center justify-center">
          {!img ? (
            <label className="flex flex-col items-center justify-center w-28 h-28 rounded-[30px] cursor-pointer border border-zinc-600">
              <span className="text-zinc-500">
                <GoFileMedia className="w-5 h-5" />
              </span>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImgChange}
                className="hidden"
                required
              />
            </label>
          ) : (
            <div className="w-40 h-full rounded-[30px] flex items-center justify-center">
              <Image
                width={80}
                height={80}
                src={img}
                alt="Upload Preview"
                className="w-28 h-28 rounded-[30px]"
              />
              <LuTrash
                className="fixed ml-40 h-5 w-5 cursor-pointer text-trash hover:text-orange-300"
                onClick={() => setImg('')}
              />
            </div>
          )}
        </div>
        <div className="w-full flex flex-col items-center gap-2 h-[40%]">
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={data.name}
            onChange={handleChange}
            required
            className="bg-zinc-600 w-[90%] mx-auto rounded-md text-zinc-200 h-10 px-4"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            value={data.message}
            onChange={handleChange}
            required
            className="bg-zinc-600 w-[90%] mx-auto rounded-md text-zinc-200 text-start h-20 px-4 py-3"
          />
        </div>
        <div className="h-[20%] flex gap-5 items-center justify-end w-[90%]">
          <button
            type="submit"
            className="underline text-zinc-500 text-md"
            onClick={handleClear}
          >
            Descartar
          </button>
          {data.image && data.message && data.name ? (
            <button className="px-4 py-2 text-md bg-button rounded-md text-zinc-100">
              Publicar
            </button>
          ) : (
            <button className="px-4 py-2 text-md bg-zinc-400 rounded-md text-zinc-100">
              Publicar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
