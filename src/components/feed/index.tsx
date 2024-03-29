import React from 'react'
import {
  SAuthor,
  SContainer,
  SDescription,
  SImage,
  SSend,
  SIcone,
  SContainerSend,
  SContainerImgDescription
} from './styled'
import { IProps } from './types'
import Delete from '../../assets/img/delete.svg'

const Feed: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <SContainer>
      <SIcone src={Delete} />
        <SContainerImgDescription>
          <SImage src="https://www.publicdomainpictures.net/pictures/200000/velka/plain-blue-background.jpg" />
          <SDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi
            earum, necessitatibus nihil asdasdasdasdasdasd dasdasdadadasdadasd
          </SDescription>
        </SContainerImgDescription>
        <SContainerSend>
          <SSend>Enviado por</SSend>
          <SAuthor>Daniel Barboza</SAuthor>
        </SContainerSend>
      </SContainer>
    </>
  )
}
export default Feed
