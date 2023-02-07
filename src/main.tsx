import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import AppRoutes from './routes/routes'
import './index.css'
import DefaultTheme from './theme/DefaultTheme'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <ThemeProvider theme={DefaultTheme}>
    <RouterProvider router={AppRoutes} />
  </ThemeProvider>

)
