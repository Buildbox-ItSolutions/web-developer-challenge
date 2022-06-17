import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Form from '../components/form'
import Feed from '../components/feed'
import styles from '../styles/Home.module.css'
import headerImage from '../../public/header-image.png'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Buildbox Web Developer Challenge</title>
        <meta name="description" content="Buildbox Web Developer Challenge" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header>
        <Image src={headerImage} width={103} height={45} />
      </Header>

      <main className={styles.main}>
        <Form />
        <Feed />
      </main>
    </div>
  )
}

export default Home
