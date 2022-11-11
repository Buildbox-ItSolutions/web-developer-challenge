import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../Context/AuthContext'
import Layout from '../components/Layout'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
