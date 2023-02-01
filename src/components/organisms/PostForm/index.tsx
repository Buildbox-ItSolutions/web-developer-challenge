import React from 'react';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import * as P from './styles'
import { FileImage } from 'phosphor-react';

const PostForm: React.FC = () => {
  return (
    <P.Container>
      <P.Form>
        <P.Header>
          <div>
            <FileImage size={26} weight="thin" />
          </div>
        </P.Header>
        <Input type={'text'} placeholder={'Nome'} />
        <TextArea placeholder='Escreva seu post...' />
        <P.ButtonContainer>
          <P.Button
            background='#313131'
            color='#575757'
            padding='1.2rem'
            textDecoration='underline'
            type='reset'
          >
            Descartar
          </P.Button>
          <P.Button
            background='#71BB00'
            color='#ffffff'
            padding='1.2rem'
            bRadius='1rem'
            type='submit'
          >
            Publicar
          </P.Button>
        </P.ButtonContainer>
      </P.Form>
    </P.Container>
  )
}

export default PostForm