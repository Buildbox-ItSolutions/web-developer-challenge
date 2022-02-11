import { ReactNode } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../styles/index'
import Nav from './nav'

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

interface ChildrenProps{
    children: ReactNode
}

const Layout = ({children}:ChildrenProps) => {
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            

            <StyledContent>
                <Nav />

                <div id="content">
                    {children}
                </div>
            </StyledContent>
        </ThemeProvider>
    )
}

export default Layout;