import React from 'react'
import Loading from '../../components/loading/index'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Helmet } from 'react-helmet'
import { IDataForm, PageTitle } from './types'
import FormPost from '../../components/form'
import { SContainerForm, TitleFeed } from './styled'
import FormFeed from '../../components/feed'
import { addMessage } from '../../store/message/message.reducer'

const Home: React.FC<PageTitle> = ({ title }) => {
  const message: IDataForm[] = useAppSelector((state) => state.message.all)
  const loading: boolean = useAppSelector((state) => state.message.loading)
  const dispatch = useAppDispatch()

  const handleSubmit = (data: any) => {
    dispatch(addMessage(data))
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Helmet title={title} />
      <SContainerForm>
        <FormPost submit={handleSubmit} />
        <TitleFeed>Feed</TitleFeed>
        {message.length !== 0 &&
          message.map((item: IDataForm) => (
            <FormFeed key={item._id} data={item} />
          ))}
      </SContainerForm>
    </>
  )
}
export default Home
