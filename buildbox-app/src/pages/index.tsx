import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildbox Web Developer Challenge</title>
        <meta name="description" content="Buildbox Web Developer Challenge" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}></main>
    </div>
  )
}

export default Home
