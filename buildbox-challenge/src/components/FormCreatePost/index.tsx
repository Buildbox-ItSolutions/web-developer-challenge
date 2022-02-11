import { ImagePost } from "../ImagePost"
import { Container, Form, ButtonsContainer, ButtonDiscard, ButtonPublish} from "./style"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContext } from "react"
import { CurrentImageContext } from "../../providers/CurrentImage"
import { PostContext } from "../../providers/Posts"
import { useEffect } from "react"
import { IoMdClose } from 'react-icons/io'
interface FormData{
    name:string,
    message:string
}
export const FormCreatePost = () => {
  const { posts, addPost } = useContext(PostContext)
  const { currentImage, changeCurrentImage} = useContext(CurrentImageContext)

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    message: yup.string().required("Mensagem obrigatória")

  })

  const {register, handleSubmit, formState:{ errors }, reset} = useForm<FormData>({
      resolver:yupResolver(formSchema)
  })


  const onSubmit = (data:FormData) => {
    const post = { ...data, image:currentImage }
    addPost(post)
    reset()
    changeCurrentImage("")
  }


  const handleClick = () =>{
    reset()
    changeCurrentImage("")
  }

  return (
    <Container>
       
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ImagePost/>
            <input 
                type="text"
                placeholder="Digite seu nome"
                className="input_text name_field"
                {...register("name")}
            />
            <p>{errors.name?.message}</p>
            <textarea 
                placeholder="Digite sua mensagem"
                className="input_text text_area"
                {...register("message")}
            />
            <p>{errors.message?.message}</p>
            <ButtonsContainer>
                <ButtonDiscard type="submit" onClick={handleClick}>Descartar</ButtonDiscard>
                <ButtonPublish>Publicar</ButtonPublish>
            </ButtonsContainer>
        </Form>
        
    </Container>
  )
}

