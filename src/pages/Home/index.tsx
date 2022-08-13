import { Header } from '@/components/molecules'
import { InputPost } from '@/components/organisms'

import * as S from './styles'

export const Home = () => {
  return (
    <>
      <Header />
      <S.Content>
        <InputPost />
      </S.Content>
    </>
  )
}
