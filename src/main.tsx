import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack';
import AppRoutes from './routes/routes'
import './index.css'
import DefaultTheme from './theme/DefaultTheme'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <ThemeProvider theme={DefaultTheme}>
    <SnackbarProvider maxSnack={3} autoHideDuration={3000} >
      <RouterProvider router={AppRoutes} />
    </SnackbarProvider>
  </ThemeProvider>

)
