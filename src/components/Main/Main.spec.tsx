import React from 'react'
import { render } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('dummy test', () => {
    render(<Main />)
  })

  it('should match snapshot', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
