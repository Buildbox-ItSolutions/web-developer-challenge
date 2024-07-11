import { FormEvent, useEffect, useState } from "react"
import { ImageProfile } from "./imageProfile"
import { IPost } from "../Interfaces/Ipost"
import {Toaster, toast} from "sonner"
import { validate } from "../utils/validate"


interface FormProps {
  postList: IPost[],
  setPostList:  React.Dispatch<React.SetStateAction<IPost[]>>,
  post?: IPost | null
}

export function Form({postList, setPostList, post}: FormProps){
  const [, setId] = useState(0)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<IPost|  Error | null>(null)

  useEffect(() => {

    if(post){
      setId(post.id)
      setName(post.name)
      setMessage(post.message)
    }
  }, [post])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    setErrors(null)

    const id = Math.floor(Math.random() * 1000)
    const newPost:IPost = {id, name, message}

    const postValidate: IPost ={
      id,
      name,
      message
    }

    const validateErrors = validate(postValidate)

    console.log(postValidate, validateErrors)

    if(Object.keys(validateErrors).length > 0) {
      toast.error("Algo deu errado")
   
      setErrors(validateErrors)
      return
    }
    
    setPostList!([ newPost, ...postList])


   toast.success("Post criado com sucesso!")
   setName("")
   setMessage("")
  }

  const handleReset = (e: FormEvent) => {
    e.preventDefault()
    
    setName("")
    setMessage("")
  }
 
  return(
    <form onSubmit={handleSubmit} className="flex flex-col w-[516px]  items-center m-auto mt-10 p-6 rounded border border-[#3b3b3b] bg-[#313131]">
      <ImageProfile/>
      <Toaster richColors/>
      <div className='flex flex-col mt-4 mb-2 w-full rounded-lg  '>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)} 
          type="text" 
          className="text-slate-50/70 outline-none rounded-lg pl-4 py-3 bg-[#494949] mb-2 placeholder:text-slate-50/30 " 
          placeholder="Digite seu nome"/>
           {errors ? <p className="text-red-500 italic">{errors.name}</p> : null }
        <textarea 
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          className="text-slate-50/70 resize-none h-20 outline-none rounded-lg pl-4 py-3 bg-[#494949] placeholder:text-slate-50/30" 
          placeholder="Mensagem">
        </textarea>
          {errors ? <p className="text-red-500 italic">{errors.message}</p> : null }
      </div>
      <div className="flex w-full justify-end gap-4 mt-12 ">
        <button
          onClick={handleReset} 
          className="text-[#5f5f5f] text-center text-sm underline hover:text-slate-50">
          Descartar
        </button>
        <button
          
          className="px-6 py-2 rounded-lg bg-[#5f5f5f] hover:bg-lime-600 hover:text-slate-50/80 ">
          Publicar
        </button>
      </div>
    </form>
  )
}