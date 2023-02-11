import React from 'react'

/* testing-library */
import { render, fireEvent } from '@testing-library/react'

/*components */
import AddPost from '../../../components/AddPost'

/* faker */
import { faker } from '@faker-js/faker'

describe('AddPost', () => {
  it('should keep the button disabled if message is not filled', () => {
    const { getByPlaceholderText, debug } = render(<AddPost />)
    const message = faker.internet.userName()
    const inputName = getByPlaceholderText(
      'Digite seu nome'
    ) as HTMLInputElement
    const inputMessage = getByPlaceholderText('Mensagem') as HTMLInputElement
    fireEvent.change(inputName, { target: { value: message } })
    debug()
    expect(inputName.value).toEqual(message)
    expect(inputMessage.value).toEqual('')
  })
})
