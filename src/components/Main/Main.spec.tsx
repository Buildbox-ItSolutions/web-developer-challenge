import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('dummy test', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
