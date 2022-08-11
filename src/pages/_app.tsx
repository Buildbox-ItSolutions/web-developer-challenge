import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Buildbox | Web Challenge</title>
        <meta name="description" content="Challenge Buildbox-ItSolutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
