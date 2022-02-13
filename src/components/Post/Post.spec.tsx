import React from 'react'
import { render } from '@testing-library/react'
import Post from '.'
import { postProps } from './mockProps'

describe('<Post />', () => {
  it('dummy test', () => {
    render(<Post {...postProps} />)
  })
})
