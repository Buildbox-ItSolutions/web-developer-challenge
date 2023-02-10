import React from 'react'

/* testing-library */
import { render } from '@testing-library/react'

/*components */
import Input from '../../../components/Input'

/* faker */
import { faker } from '@faker-js/faker'

describe('Input', () => {
  it('Should render component of input correcty', () => {
    const { getByRole } = render(<Input role="input" />)
    expect(getByRole('input')).toBeInTheDocument()
  })
})
