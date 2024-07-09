import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Form from '.'
import renderWithProvidersAndRouter from '../../tests/renderWithProvidersAndRouter'

describe('Form test', () => {
  it('should render image, name and message inputs', () => {
    renderWithProvidersAndRouter(<Form />)

    const image = screen.getByTestId('image-input')
    const name = screen.getByPlaceholderText('Digite seu nome')
    const message = screen.getByPlaceholderText('Mensagem')

    expect(image).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(message).toBeInTheDocument()
  })

  it('should render discard and publish buttons', () => {
    renderWithProvidersAndRouter(<Form />)

    const publishButton = screen.getByTestId('publish-button')
    const discardButton = screen.getByText('Descartar')

    expect(publishButton).toBeInTheDocument()
    expect(publishButton).toBeDisabled()

    expect(discardButton).toBeInTheDocument()
  })

  it('should clear the inputs when the discard button is clicked', () => {
    renderWithProvidersAndRouter(<Form />)

    const discardButton = screen.getByText('Descartar')
    const nameInput = screen.getByPlaceholderText('Digite seu nome')
    const messageInput = screen.getByPlaceholderText('Mensagem')

    expect(discardButton).toBeInTheDocument()

    fireEvent.change(nameInput, { target: { value: 'João Souza' } })
    fireEvent.change(messageInput, { target: { value: 'Testando mensagem de post' } })

    expect(nameInput).toHaveValue('João Souza')
    expect(messageInput).toHaveValue('Testando mensagem de post')

    fireEvent.click(discardButton)

    expect(nameInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
  })
})
