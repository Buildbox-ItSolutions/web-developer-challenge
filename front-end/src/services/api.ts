import axios from "axios";
import { IPostData } from "../interfaces";
import { toast } from "react-toastify";

const Api = axios.create({
  baseURL: "http://localhost:5000/api"
})

export const createPost = async (author: string, message: string) => {
  try {
    const response = await Api.post("/create", {
      name: author,
      post: message
    })
    toast.success("Post publicado!!")
    return response.data

  } catch (error) {
    toast.error(`Deu um erro na criação do seu post. Tente novamente! ${error}`)
  }
}


export const getAllPosts = async (): Promise<IPostData[]> => {
  const response = await Api.get("/find")

  return response.data
}

export const deletePost = async (id: string) => {
  try {
    const response = await Api.delete(`/delete/${id}`)

    toast.success("Post deletado com sucesso!")

    return response.data;

  } catch (error) {
    toast.error(`Estamos com problemas internos, tente novamente mais tarde - ${error}`)
  }
}