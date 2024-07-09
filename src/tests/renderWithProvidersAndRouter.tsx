import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

const renderWithProvidersAndRouter = (
  component:
    | string
    | number
    | boolean
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router location={history.location} navigator={history}>
            {component}
          </Router>
        </ThemeProvider>
      </Provider>
    ),
    history,
  };
};

export default renderWithProvidersAndRouter
