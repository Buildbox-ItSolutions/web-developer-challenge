
import {IPost} from "../Interfaces/Ipost";

type Error = {
  [key: string]: string
}

export const validate = (post: IPost) => {
  const errors: Error = {

  }

  if(!post.name){
    errors["name"] = "O nome é obrigatório"
  }
  if(!post.message){
    errors["message"] = "A mensagem é obrigatório"
  }
  

  return errors

}