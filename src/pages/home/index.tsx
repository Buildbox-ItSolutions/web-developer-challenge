import React, { useEffect } from 'react'
import Loading from '../../components/loading/index'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Helmet } from 'react-helmet'
import { PageTitle } from './types'

const Home: React.FC<PageTitle> = ({ title }) => {
  const dispatch = useAppDispatch()

  const message = useAppSelector((state) => state.message.all)
  const loading: boolean = useAppSelector((state) => state.message.loading)

  // useEffect(() => {
  //   dispatch(listAllCategoryAction())
  // }, [dispatch])


  if (loading) {
    return <Loading />
  }


  return (
    <>
      <Helmet title={title} />
      <h1>Olá mundo!!!</h1>
    </>
  )
}
export default Home
