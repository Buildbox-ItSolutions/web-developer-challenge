import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from "axios";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import logo from "../../assets/images/logo.svg";
import { useGetPhotoDetails } from "../../queries/getRandomPhotos";
import { usePostsStore } from "../../stores/Posts";
import { TrashIcon } from "../Icons";
import { photoDescription } from "./mockLorem";
import { CardFooter, Container, Content } from "./styles";
import LoadingSpin from '../LoadingSpin/LoadingSping';
import Swal from 'sweetalert2';

interface Props {
  children?: React.ReactNode;
}

export interface FormDataType {
  id: string;
  urlSmall: string;
  userName: string;
  description: string;
}

const validationSchema = Yup.object().shape({
  id: Yup.string(),
  urlSmall: Yup.string()
    .required('Campo obrigatório'),
  userName: Yup.string()
    .min(8, 'Deve ter pelo menos 8 caracteres.')
    .required('Campo obrigatório'),
  description: Yup.string()
    .min(10, 'Deve ter pelo menos 2 caracteres.')
    .required('Campo obrigatório'),
});

const PostCard: React.FC<Props> = () => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  })
  const fields = methods.watch([
    'id',
    'urlSmall',
    'userName',
    'description',
  ])

  const {
    post,
    setPost,
    setPosts,
    removePost
  } = usePostsStore((state) => ({
    post: state.post,
    setPost: state.setPost,
    setPosts: state.setPosts,
    removePost: state.removePost
  }))

  const { data: photoDetails, refetch } = useGetPhotoDetails()
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    methods.setValue('id', photoDetails?.id || '')
    methods.setValue('urlSmall', photoDetails?.urls?.small || '')
    methods.setValue('userName', photoDetails?.user?.name || '')
    methods.setValue('description', photoDescription.description || '')
  }, [photoDetails])

  const onSubmit = (data: FormDataType) => {
    setLoading(true)
    const postPayload = {
      id: data.id,
      urlSmall: data.urlSmall,
      userName: data.userName,
      description: data.description,
    }
    Swal.fire({
      title: 'Publicar',
      text: 'Deseja publicar o post?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Publicar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setPosts((prevPosts) => [...prevPosts, postPayload])
      }
    })
    setLoading(false)
  }


  const handleRemove = (id: string) => {
    removePost(id)
    setPost({
      id: '',
      urlSmall: '',
      userName: '',
      description: '',
    })
  }

  const handleSetImage = async () => {
    try {
      await refetch()
      setPost({
        id: photoDetails?.id || '',
        urlSmall: photoDetails?.urls?.small || '',
        userName: photoDetails?.user?.name || photoDescription.userName,
        description: photoDescription.description || '',
      })
    } catch (error) {
      const err = error as AxiosError
      toast.error(err.message || 'Erro ao buscar imagem')
    }
  }

  return (
    <>
      <Container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <img
              src={
                loading
                  ? (
                    <LoadingSpin color='#313131' />
                  ) : (
                    post?.urlSmall || logo
                  )}
              id="urlSmall"
              onClick={handleSetImage}
              alt="post-image"
              className="post-image"
            />
            {post.urlSmall && (
              <button
                type="button"
                onClick={() => handleRemove(post.id)}
                className="trash-button"
              >
                <TrashIcon className="w-6 h-6 " />
              </button>
            )}
            <Content>
              <input
                type="text"
                id="userName"
                value={post.userName || ''}
                className="post-title-input"
                placeholder="Digite seu nome"
                onChange={(e) => methods.setValue('userName', e.target.value)}
              />
              <input
                type="text"
                id="description"
                value={post.description || ''}
                className="post-message"
                placeholder="Mensagem"
                onChange={(e) => methods.setValue('description', e.target.value)}
              />
            </Content>
            <CardFooter>
              <button
                type="button"
                onClick={() => handleRemove(post.id)}
                className="remove-button"
              >
                <u>Descartar</u>
              </button>
              <button
                type="submit"
                className="publish-button">
                {loading ? (
                  <LoadingSpin color='#313131' />
                ) : (
                  'Publicar'
                )}
              </button>
            </CardFooter>
          </form>
        </FormProvider>
      </Container>
    </>
  )
}
PostCard.displayName = 'PostCard';
export type PostCardProps = Props;
export default PostCard;
