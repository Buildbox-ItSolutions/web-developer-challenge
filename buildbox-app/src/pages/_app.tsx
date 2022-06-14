import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PostsProvider } from '../components/PostsContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  )
}

export default MyApp
