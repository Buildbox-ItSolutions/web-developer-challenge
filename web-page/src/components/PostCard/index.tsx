import { yupResolver } from '@hookform/resolvers/yup';
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import logo from "../../assets/images/logo.svg";
import { useGetPhotoDetails } from "../../queries/getRandomPhotos";
import { usePostsStore } from "../../stores/Posts";
import { TrashIcon } from "../Icons";
import { photoDescription } from "./mockLorem";
import { CardFooter, Container, Content } from "./styles";

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
  urlSmall: Yup.string(),
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

  const photoDetails = useGetPhotoDetails()
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (post !== null) {
      methods.setValue('id', post.id)
      methods.setValue('description', post.description ?? photoDescription.description)
      methods.setValue('urlSmall', post.urlSmall)
      methods.setValue('userName', post.userName)
    }else{
      methods.reset({
        id: '',
        urlSmall: '',
        userName: '',
        description: '',
      })
    }
  }, [post])

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
        setPost(null)
      }
    })
    setLoading(false)
  }

  const handleRemove = (id: string) => {
    removePost(id)
    setPost(null)
    methods.reset({
      id: '',
      urlSmall: '',
      userName: '',
      description: '',
    })
  }

  const handleSetImage = () => {
    if (post === null) {
      photoDetails.mutateAsync()
        .then((res) => {
          setPost({
            id: res.id,
            urlSmall: res.urls.small,
            userName: res.user.name,
            description: res.description ?? photoDescription.description,
          })
        }).catch((err) => {
          console.log('err', err)
        })
    }
  }

  return (
    <>
      <Container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <img
              src={methods.watch('urlSmall') || logo}
              id="urlSmall"
              onClick={handleSetImage}
              alt="post-image"
              className="post-image"
            />
            {post?.urlSmall && (
              <button
                type="button"
                onClick={() => handleRemove(post?.id)}
                className="trash-button"
              >
                <TrashIcon className="w-6 h-6 " />
              </button>
            )}
            <Content>
              <input
                type="text"
                id="userName"
                {...methods.register('userName')}
                className="post-title-input"
                placeholder="Digite seu nome"
                onChange={(e) => methods.setValue('userName', e.target.value)}
              />
              <input
                type="text"
                id="description"
                {...methods.register('description')}
                className="post-message"
                placeholder="Mensagem"
                onChange={(e) => methods.setValue('description', e.target.value)}
              />
            </Content>
            <CardFooter>
              <button
                type="button"
                onClick={() => {
                  if (post?.urlSmall){
                    handleRemove(post?.id)
                  }
                }}
                className="remove-button"
              >
                <u>Descartar</u>
              </button>
              <button
                type="submit"
                className={`publish-button ${post?.urlSmall ? 'active' : ''}`}
              >
                {loading ? (
                  'Publicando...'
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
