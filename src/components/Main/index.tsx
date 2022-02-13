import React from 'react'
import FormPostFields from '../FormPostFields'
import Header from '../Header'
import Post from '../Post'
import * as S from './style'

const dataExemple = [
  {
    id: 1,
    photo: '/image/image.png',
    title: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
    author: 'Manuela Oliveira'
  },
  {
    id: 2,
    photo: '/image/image.png',
    title: 'Lorem ipsum dolor sit amet',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
    author: 'Manuela Oliveira'
  }
]

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />
      <FormPostFields />
      {dataExemple.map(({ id, photo, title, body, author }) => (
        <Post
          key={id}
          photo={photo}
          title={title}
          body={body}
          author={author}
        />
      ))}
    </S.Wrapper>
  )
}

export default Main
