import { useState } from 'react'
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
  SpanError 
} from './styles'

type Inputs = {
  imageFile?: string,
  name: string,
  message: string,
};

export function Message() {
  const [image, setImage] = useState('')
  const [fieldsFilled, setFieldsFilled] = useState(false)

  const { 
    register, 
    handleSubmit,
    getValues,
    setValue, 
    formState: { errors } 
  } = useForm<Inputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: "all",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined    
  });

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files.length > 0){
      const src = URL.createObjectURL(event.target.files[0]);
      setValue('imageFile', src)
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

  return (
    <Container>
      <FormPanel onSubmit={handleSubmit(onSubmit)} onChange={hasValue}>
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
    </Container>
  )
}