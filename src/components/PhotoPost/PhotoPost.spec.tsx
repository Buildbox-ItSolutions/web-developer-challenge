import React from 'react'
import { render } from '@testing-library/react'
import PhotoPost from '.'
import { photoPostProps } from './mockProps'

describe('<PhotoPost />', () => {
  it('dummy test', () => {
    render(<PhotoPost {...photoPostProps} />)
  })
})
