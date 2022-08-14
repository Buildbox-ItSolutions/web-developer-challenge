import { forwardRef } from 'react'

import * as S from './styles'

type Props = {
  pic?: string
}

export const Avatar = forwardRef<HTMLInputElement, Props>(({ pic, ...props }, ref) => {
  return (
    <S.Container picture={pic}>
      {!!pic || <S.Picture icon='IcPhoto' size='24px' />}
      <S.Input {...props} ref={ref} type='file' accept='image/gif, image/jpeg, image/png'></S.Input>
    </S.Container>
  )
})
