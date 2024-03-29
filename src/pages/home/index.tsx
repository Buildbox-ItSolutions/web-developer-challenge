import React from 'react'
import Loading from '../../components/loading/index'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Helmet } from 'react-helmet'
import { PageTitle } from './types'
import FormPost from '../../components/form'
import { SContainerForm, TitleFeed } from './styled'
import Feed from '../../components/feed'

const Home: React.FC<PageTitle> = ({ title }) => {
  const dispatch = useAppDispatch()

  const message = useAppSelector((state) => state.message.all)
  const loading: boolean = useAppSelector((state) => state.message.loading)

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Helmet title={title} />
      <SContainerForm>
        <FormPost />
        <TitleFeed>Feed</TitleFeed>
        <Feed />
      </SContainerForm>
    </>
  )
}
export default Home
