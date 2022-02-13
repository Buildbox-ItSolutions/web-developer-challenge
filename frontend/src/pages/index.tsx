// External libraries
import React from 'react'
import Head from 'next/head'

// Components
import Body from '../components/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Body />
    </>
  )
}

export default Home
