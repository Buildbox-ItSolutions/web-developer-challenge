import Button from 'components/Buntton'
import Input from 'components/Input'
import { IntProst } from 'components/Main'
import { useState } from 'react'
import * as S from './styles'
interface addPostlistProps extends IntProst {
  addPostlistProp: void
}
const InsertPost = ({ addPostlistProp }: addPostlistProps) => {
  const [name, setName] = useState('')
  const [mensagem, setMensage] = useState('')
  const addPost = () => {
    addPostlistProp({
      id: new Date().getTime(),
      name,
      mensagem
    })
    setMensage('')
    setName('')
  }
  const ClearInput = () => {
    setMensage('')
    setName('')
  }
  return (
    <S.Wrapper>
      <S.Image src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg" />
      <Input
        name="name"
        label="Nome"
        size="2rem"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <Input
        name="name"
        label="Messagem"
        size="80px"
        type="text"
        value={mensagem}
        onChange={(e) => {
          setMensage(e.target.value)
        }}
      />
      <S.GroupButton>
        <Button bg="transparent" value="add" onClick={ClearInput}>
          Descartar
        </Button>

        <Button bg="#71bb00" value="add" onClick={addPost}>
          Enviar
        </Button>
      </S.GroupButton>
    </S.Wrapper>
  )
}

export default InsertPost
