import { createContext, ReactNode, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import {
  useForm,
  UseFormRegister,
  UseFormWatch,
  UseFormReset,
  UseFormResetField
} from 'react-hook-form'

//TYPES
interface PostProviderProps {
  children: ReactNode
}

interface FormData {
  username: string
  name: string
  message: string
}

interface PostData extends FormData {
  id: string
}

interface PostContextData {
  addNewPost: () => void
  deletePost: (id: string) => void
  register: UseFormRegister<FormData>
  watch: UseFormWatch<FormData>
  reset: UseFormReset<FormData>
  resetField: UseFormResetField<FormData>
  posts: PostData[]
}

//CREATE CONTEXT
const PostContext = createContext({} as PostContextData)

//COMPONENTE
export function PostProvider({ children }: PostProviderProps) {
  const { register, watch, reset, resetField } = useForm({
    defaultValues: {
      username: '',
      name: '',
      message: ''
    }
  })

  const [posts, setPosts] = useState<PostData[]>([])

  function addNewPost() {
    const { username, name, message } = watch()

    if (
      /^$/.test(username.trim()) &&
      /^$/.test(name.trim()) &&
      /^$/.test(message.trim())
    ) {
      reset()
      return alert('Nenhum campo deve estar vazio')
    }

    if (username.split('').length < 2) {
      resetField('username')
      return alert('Adicione um avatar válido')
    }

    if (name.split('').length > 20) {
      resetField('name')
      return alert('Seu nome deve ter no máximo 20 caracteres')
    }

    if (message.split('').length > 240) {
      return alert('Sua mensagem deve ter no máximo 240 caracteres')
    }

    setPosts([...posts, { username, name, message, id: uuid() }])
    reset()
  }

  function deletePost(id: string) {
    const filtredPosts = posts.filter((post) => post.id !== id)
    setPosts(filtredPosts)
  }

  return (
    <PostContext.Provider
      value={{
        addNewPost,
        deletePost,
        register,
        watch,
        reset,
        resetField,
        posts
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

//HOOK PARA USAR O CONTEXT
export function usePost() {
  const { addNewPost, deletePost, register, watch, reset, resetField, posts } =
    useContext(PostContext)

  return {
    addNewPost,
    deletePost,
    register,
    watch,
    reset,
    resetField,
    posts
  }
}
