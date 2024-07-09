import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import PostCard from '.'
import renderWithProvidersAndRouter from '../../tests/renderWithProvidersAndRouter'
import { initialPosts } from '../../utils/initialPosts'


describe('PostCard test', () => {
  const [ post ] = initialPosts

  it('should render delete post button', () => {
    renderWithProvidersAndRouter(<PostCard post={post} index={0} />)

    const deleteButton = screen.getByTestId('delete-post')

    expect(deleteButton).toBeInTheDocument()
  })

  it('should render post informations', () => {
    renderWithProvidersAndRouter(<PostCard post={post} index={0} />)

    const image = screen.getByAltText(post.name)
    const name = screen.getByText(post.name)
    const message = screen.getByText(/Lorem Ipsum is simply dummy/)

    expect(image).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(message).toBeInTheDocument()
  })
})
