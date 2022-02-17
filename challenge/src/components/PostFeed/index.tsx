import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { 
  Container, 
  FormPanel, 
  ImageUpload, 
  ImageLabelUpload, 
  ImageWrapper, 
  ImageDelete, 
  ImageView,
  FieldsWrapper,
  Input,
  TextArea,
  ButtonsWrapper,
  ButtonSubmit,
  ButtonCancel,
  SpanError,
  FeedContainer, 
  Title, 
  Post, 
  PostDelete, 
  Delete,
  PostContent,
  PostImage,
  NoImage,
  Image,
  PostText,
  MessageBody,
  AuthorLabel,
  Author  
} from './styles'

type Post = {
  id: string,
  imageFile?: string,
  name: string,
  message: string
};

export function PostFeed() {
  const [image, setImage] = useState('')
  const [fieldsFilled, setFieldsFilled] = useState(false)
  const [data, setData] = useState<Post[]>(() => {
    const storagedPosts = localStorage.getItem('@Buildbox:posts')

    if (storagedPosts) {
      return JSON.parse(storagedPosts)
    }

    return []
  })

  const { 
    register, 
    handleSubmit,
    getValues,
    setValue, 
    formState,
    reset,
    formState: { errors },
  } = useForm<Post>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "all",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined    
  });

  const submit: SubmitHandler<Post> = (message) => {
    message.id = uuidv4()
    setData([message, ...data])
  }

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files.length > 0){
      const src = URL.createObjectURL(event.target.files[0]);
      const reader = new FileReader()

      reader.addEventListener(
        'load',
        () => {
          if (reader.result) {
            setValue('imageFile', reader.result.toString())
          }
        },
        false
      )

      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0])
      }
      
      setImage(src)
    }
  }

  const handleRemoveImage = () => {
    setValue('imageFile', '')
    setImage('')
  }

  const hasValue = () => {
    const { name, message } = getValues()
    setFieldsFilled(Boolean(name && message))
  }

  const removePost = (id: string) => {
    const newArray = data.filter((post) => post.id !== id)
    setData(newArray)
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      handleRemoveImage()      
      reset({ 
        imageFile: '',
        name: '',
        message: ''
      });
      hasValue()
    }
  }, [formState, reset]);  

  useEffect(() => {
    localStorage.setItem(
      '@Buildbox:posts',
      JSON.stringify(data)
    )
  }, [data])

  return (
    <Container>
      <FormPanel onSubmit={handleSubmit(submit)} onChange={hasValue}>
         <ImageUpload {...register('imageFile')} onChange={event => handleImage(event)}/>
        { image ? 
        <ImageWrapper>
          <ImageView src={image} />
          <ImageDelete onClick={handleRemoveImage} />
        </ImageWrapper> 
        : <ImageLabelUpload /> }

        <FieldsWrapper>
          <Input {...register('name', { required: true })} placeholder='Digite seu nome'/>
          <TextArea {...register('message', { required: true })} placeholder='Mensagem'/>
          {errors.name && <SpanError>O nome é obrigatório</SpanError>}
          {errors.message && <SpanError>A mensagem é obrigatória</SpanError>}
        </FieldsWrapper>  

        <ButtonsWrapper>
          <ButtonCancel name='reset' type='reset' onClick={handleRemoveImage}>Descartar</ButtonCancel>
          <ButtonSubmit name='submit' type='submit' hasData={fieldsFilled}>Publicar</ButtonSubmit>
        </ButtonsWrapper>
      </FormPanel>

      {data.length > 0 ? (      
        <FeedContainer>
        <Title>Feed</Title>
        {data.map((post) => (
        <Post key={post.id}>
          <PostDelete>
            <Delete name='delete' type="button" onClick={() => removePost(post.id)} />
          </PostDelete>  
          <PostContent>
            <PostImage>
              {post.imageFile ? (
                <Image src={post.imageFile} alt={post.name} />
              ) : (<NoImage />) }
            </PostImage>
            <PostText>
              <MessageBody>{post.message}</MessageBody>
              <AuthorLabel>Enviado por</AuthorLabel>
              <Author>{post.name}</Author>
            </PostText>
          </PostContent>
        </Post>    
        ))}  
      </FeedContainer>
    ) : ('')}      
    </Container>
  )
}