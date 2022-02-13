import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledContent } from './styles';
import { theme, GlobalStyle } from '../../styles/index'
import Nav from '../Header'

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