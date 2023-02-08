import { CircularProgress, IconButton, Stack, styled, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useContext, useState } from 'react'
import Trash from '../../assets/icons/Trash'
import Image from '../../assets/Image'
import Button from '../Button'
import Card from '../Card'
import Link from '../Link'
import TextArea from '../TextArea'
import TextInput from '../TextInput'

import * as yup from 'yup'
import { FormikProvider, useFormik } from 'formik'
import { PostModel } from '../../Interfaces/PostInterfaces'
import HelperText from '../HelperText'
import { PostContext } from '../../Context/PostContext'
import AlertDialog from '../AlertDialog'


const schema = yup.object().shape({
  author: yup.string().required('É necessário o nome do autor para fazer uma publicação.'),
  message: yup.string().required('Escreva uma mensagem para fazer uma publicação.'),
})

export default function WritePostCard() {

  const { savePost, postLoading } = useContext(PostContext);

  const [imageBlob, setImageBlob] = useState<File>();
  const [imagePath, setImagePath] = useState<string>('');

  const [discartAlert, setDiscartAlert] = useState(false);

  async function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    setImagePath(e.target.value);
    const files = e.target.files;
    if (!files || files.length === 0) { return }
    setImageBlob(files[0]);
    handleChange('imageUrl')(URL.createObjectURL(files[0]))
  }

  function handleRemoveImage() {
    setImageBlob(undefined);
    setImagePath('')
    handleChange('imageUrl')('');
  }

  function handleDiscart() {
    handleRemoveImage();
    resetForm();
    setDiscartAlert(false)
  }

  const formik = useFormik<PostModel>({
    initialValues: {
      author: '',
      imageUrl: '',
      message: ''
    },
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    initialTouched: {},
    onSubmit: async (values, { setSubmitting }) => {
      savePost(values, imageBlob)
        .then(() => {
          handleRemoveImage()
          resetForm();
        })
    }
  });

  const { values, handleChange, errors, touched, setFieldTouched, handleSubmit, resetForm } = formik
  const imageIsEmpty = values.imageUrl === '';

  return (
    <Card gap={1} >
      <Stack alignItems={'center'} flexDirection={'row'} width={'100%'} >
        <Stack flex={1} height={'30px'} />
        <IconButton style={{ padding: 0 }} aria-label="upload picture" component="label" >
          <Stack
            overflow={'hidden'}
            borderRadius={'40%'}
            width={{ xs: '88px', xl: '120px' }}
            height={{ xs: '88px', xl: '120px' }}
            border={'1px solid #EDEDED10'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            {imageIsEmpty && <Image />}
            {!imageIsEmpty && <img width={'100%'} src={values.imageUrl} alt={'message image'} />}
            <input value={imagePath} onChange={(e) => handleImage(e)} hidden accept="image/*" type="file" />
          </Stack>
        </IconButton>
        <Stack flex={1} >
          {
            !imageIsEmpty &&
            <IconButton onClick={() => handleRemoveImage()} style={{ height: '42px', width: '42px' }} >
              <Trash />
            </IconButton>
          }
        </Stack>
      </Stack>
      <FormikProvider value={formik} >
        <TextInput
          onBlur={() => setFieldTouched('author')}
          value={values.author}
          onChange={handleChange('author')}
          style={{ marginTop: '16px' }}
          placeholder='Digite seu nome'
        />
        <HelperText showError={!!errors.author && touched.author} message={errors.author} />

        <TextArea
          onBlur={() => setFieldTouched('message')}
          value={values.message}
          onChange={handleChange('message')}
          placeholder='Mensagem' />
        <HelperText showError={!!errors.message && touched.message} message={errors.message} />
      </FormikProvider>

      <Stack pt={2} gap={4} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent='flex-end' className={'area-button'} >
        <Link onClick={() => { Object.keys(errors).length === 0 && setDiscartAlert(true) }} >Descartar</Link>
        <Button disabled={postLoading} type='submit' onClick={() => handleSubmit()} >
          {!postLoading && <Typography>Publicar</Typography>}
          {
            postLoading &&
            <Stack gap={3} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} >
              <CircularProgress size={'32px'} color='warning' /> <Typography>Publicando</Typography>
            </Stack>
          }
        </Button>
      </Stack>
      <AlertDialog
        isOpen={discartAlert}
        acceptButtonLabel='Descartar'
        declineButtonLabel='Cancelar'
        onAccept={() => { handleDiscart() }}
        onClose={() => { setDiscartAlert(false) }}
        title={'Descartar'}
        message={`Deseja descartar tudo?`}
      />
    </Card>
  )
}
