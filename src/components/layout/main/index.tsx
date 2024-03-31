import React, { ReactNode } from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
import '../../../assets/css/style.css'
import { Main } from '../styled'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  )
}

export default Layout