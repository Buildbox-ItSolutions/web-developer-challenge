import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ErrorPage } from './pages/Error';
import { HomePage } from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    success: { main: '#71bb00', contrastText: '#FFF' },
    error: { main: '#d65923', contrastText: '#FFF' },
    background: { default: '#343434', paper: '#313131' },
  },
  typography: {
    h3: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.29px',
      color: '#5f5f5f',
    },
    h2: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
      color: '#7a7a7a',
    },
    h1: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      color: '#9f9f9f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
