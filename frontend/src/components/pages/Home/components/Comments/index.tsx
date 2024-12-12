// External libraries
import React from 'react'

// Styled
import {
  ButtonDeleteContent,
  ButtonDelete,
  ColumnImage,
  ColumnInfo,
  Container,
  Content,
  Image
} from './styles'

interface CommentsProps {
  image?: any
  name: string
  message: string
  onClick: () => void
}

const Comments: React.FC<CommentsProps> = ({
  name,
  message,
  image,
  onClick
}) => {
  return (
    <Container>
      <ButtonDeleteContent>
        <ButtonDelete type='button' onClick={onClick}>
          <img src='/delete.svg' alt='delete' />
        </ButtonDelete>
      </ButtonDeleteContent>
      <Content>
        <ColumnImage>
          <Image>
            {image !== null
              ? <img src={image} alt='landscape' height={88} width={88} style={{ borderRadius: 36 }} />
              : <img src='/landscape.svg' alt='landscape' />
            }
          </Image>
        </ColumnImage>
        <ColumnInfo>
          <p>{message}</p>
          <p>
            <span>Enviado por</span>
            <br />
            <span>{name}</span>
          </p>
        </ColumnInfo>
      </Content>
    </Container>
  )
}

export default Comments
