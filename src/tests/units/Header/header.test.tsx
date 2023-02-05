import React from 'react'
import { render } from '@testing-library/react'

/* component */
import Header from '../../../components/Header'

describe('Header', () => {
  it('should to render component header with image', () => {
    render(<Header />)
    const imageIsRendered = document.querySelector('img') as HTMLImageElement
    expect(imageIsRendered.src).toContain('bx-logo.svg')
  })
})
