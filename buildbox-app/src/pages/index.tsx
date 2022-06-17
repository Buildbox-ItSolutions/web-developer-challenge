import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Form from '../components/form'
import Feed from '../components/feed'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buildbox Web Developer Challenge</title>
        <meta name="description" content="Buildbox Web Developer Challenge" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Form />
        <Feed />
      </main>
    </div>
  )
}

export default Home
