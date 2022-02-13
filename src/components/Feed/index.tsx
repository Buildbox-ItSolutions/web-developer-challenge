import React from 'react'
import * as S from './style'
import Post from '../Post'

const dataExample = [
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

const Feed: React.FC = () => {
  return (
    <S.Wrapper>
      {dataExample.map(({ id, photo, title, body, author }) => (
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

export default Feed
