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
import { useAppDispatch } from '../../hooks'
import { removeMessage } from '../../store/message/message.reducer'

const FormFeed: React.FC<IProps> = ({ data }) => {
  const dispatch = useAppDispatch()

  const removeFeed = (id: string): void => {
    dispatch(removeMessage(id))
  }

  return (
    <>
      <SContainer>
        <SIcone src={Delete} onClick={() => removeFeed(data?._id)} />
        <SContainerImgDescription>
          <SImage src={URL.createObjectURL(data?.preview[0])} />
          <SDescription>{data?.description}</SDescription>
        </SContainerImgDescription>
        <SContainerSend>
          <SSend>Enviado por</SSend>
          <SAuthor>{data?.name}</SAuthor>
        </SContainerSend>
      </SContainer>
    </>
  )
}
export default FormFeed
