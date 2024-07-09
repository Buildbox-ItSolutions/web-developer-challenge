import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '.'
import renderWithProvidersAndRouter from '../../tests/renderWithProvidersAndRouter'


describe('Header test', () => {
  it('should render title and subtitle', () => {
    renderWithProvidersAndRouter(<Header />)

    const title = screen.getByTestId('title')
    const subtitle = screen.getByText(/web challenge/i)

    expect(title).toHaveTextContent(/buildbox/i)
    expect(subtitle).toBeInTheDocument()
  })
})
