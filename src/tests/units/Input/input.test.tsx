import React from 'react'

/* testing-library */
import { render, fireEvent } from '@testing-library/react'

/*components */
import Input from '../../../components/Input'

/* faker */
import { faker } from '@faker-js/faker'

describe('Input', () => {
  it('Should render component of input correcty', () => {
    const { getByRole } = render(<Input role="input" />)
    expect(getByRole('input')).toBeInTheDocument()
  })
  it('should type no input component and get same value', () => {
    const { getByRole } = render(<Input role="input" />)
    const input = getByRole('input') as HTMLInputElement
    const valueTyping = faker.internet.userName()
    fireEvent.change(input, { target: { value: valueTyping } })
    expect(input.value).toEqual(valueTyping)
  })
})
