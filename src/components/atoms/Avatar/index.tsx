import { forwardRef } from 'react'

import * as S from './styles'

type Props = {
  pic?: string
  input?: boolean
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Avatar = forwardRef<HTMLInputElement, Props>(
  ({ pic, input = true, ...props }, ref) => {
    return (
      <S.Container picture={pic}>
        {!!pic || <S.Picture icon='IcPhoto' size='24px' />}
        {input && (
          <S.Input {...props} ref={ref} type='file' accept='image/gif, image/jpeg, image/png' />
        )}
      </S.Container>
    )
  }
)
