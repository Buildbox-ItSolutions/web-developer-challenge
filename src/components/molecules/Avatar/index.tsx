import { Icon } from '@/components/atoms'

import * as S from './styles'

type Props = {
  picture?: string
  onClick?: () => void
}

export const Avatar = ({ picture, onClick }: Props) => {
  return (
    <S.Container onClick={onClick} picture={picture}>
      <Icon icon='IcPhoto' size='24px' />
    </S.Container>
  )
}
