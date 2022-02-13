// External libraries
import React, { useEffect, useState } from 'react'

// Components
import Header from '../../common/Header'
import Input from '../../common/Input'
import Button from '../../common/Button'
import TextArea from '../../common/TextArea'
import Comments from './components/Comments'

// Services
import api from '../../../services/api'

// Styled
import theme from '../../../styles/theme'
import {
  FormCard,
  Container,
  Content,
  Photo,
  RowButton,
  ContentHeader,
  PhotoContent,
  Trash
} from './styles'

const Home: React.FC = () => {
  const [preview, setPreview] = useState(null)
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [users, setUsers] = useState([])

  // Descarta imagem
  const handleTrash = () => setImage(null)

  // Descarta dados escritos na mensagem
  const handleToDiscard = () => {
    setImage(null)
    setName('')
    setMessage('')
  }

  // Cria mensagem
  const handleCreateMessageUser = async () => {
    if (message !== '')
      await api.post('/users', { image: preview, name: name, message: message })
  }

  // Deleta mensagem
  const handleDeleteMessageUser = async (id: any) => {
    await api.delete(`/users/${id}`)
  }

  // Define preview como a imagem a ser mostrada
  useEffect(() => {
    if (image === null) {
      setPreview(null)
      return
    }
    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [image])

  // Habilita e desabilita inputs
  useEffect(() => {
    if (name !== '') setDisabled(false)
    else setDisabled(true)
  }, [name])

  // Mostra mensagem preenchida com os dados
  useEffect(() => {
    api
      .get('/users')
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error('Opa! Parece que houve um erro em ', err)
      })
  }, [users])

  return (
    <Container>
      <ContentHeader>
        <Header />
      </ContentHeader>
      <Content>
        <FormCard action='/' method='post'>
          <PhotoContent>
            <Photo>
              <input
                type='file'
                name='image'
                id='image'
                accept='image/*'
                onChange={(e) => setImage(e.target.files[0])}
              />
              {image === null && preview === null
                ? <img src='/landscape.svg' alt='landscape' />
                : <img src={preview} alt='image' height={88} width={88} style={{ borderRadius: 36 }} />
              }
            </Photo>
            {image && (
              <Trash type='button' onClick={() => handleTrash()}>
                <img src='/trash.svg' alt='trash' />
              </Trash>
            )}
          </PhotoContent>
          <Input
            placeholder='Digite seu nome'
            onChange={event => setName(event.target.value)}
            type='text'
            name='name'
            value={name}
            required
            width='100%'
            height='40px'
            paddingHorizontal='16px'
            color={theme.colors.text}
            backgroundColor={theme.colors.gray_400}
            border='none'
            borderRadius='8px'
          />
          <TextArea
            placeholder='Mensagem'
            onChange={event => setMessage(event.target.value)}
            name='message'
            value={message}
            maxlenght={250}
            disabled={disabled}
            required
            width='100%'
            height='80px'
            marginTop='8px'
            paddingHorizontal='16px'
            paddingVertical='16px'
            color={theme.colors.text}
            backgroundColor={theme.colors.gray_400}
            border='none'
            borderRadius='8px'
          />
          <RowButton>
            <Button
              title='Descartar'
              isActive={!disabled}
              type='button'
              disabled={disabled}
              width='98px'
              height='41px'
              marginTop='16px'
              color={theme.colors.gray_350}
              colorActive={theme.colors.gray_350}
              backgroundColor='transparent'
              backgroundColorActive='transparent'
              border='none'
              borderRadius='8px'
              textDecoration='underline'
              fontSize='14px'
              fontWeight={500}
              onClick={() => handleToDiscard()}
            />
            <Button
              title='Publicar'
              isActive={!disabled}
              type='submit'
              disabled={disabled}
              width='98px'
              height='41px'
              marginTop='16px'
              color={theme.colors.gray_700}
              colorActive={theme.colors.gray_700}
              backgroundColor={theme.colors.gray_350}
              backgroundColorActive={theme.colors.primary}
              border='none'
              borderRadius='8px'
              fontSize='14px'
              fontWeight={500}
              onClick={() => handleCreateMessageUser()}
            />
          </RowButton>
        </FormCard>
        {users.map((user, key) => {
          return (
            <Comments
              key={key}
              name={user.name}
              message={user.message}
              image={user.image}
              onClick={() => handleDeleteMessageUser(user.id)}
            />
          )
        })}
      </Content>
    </Container>
  )
}

export default Home
