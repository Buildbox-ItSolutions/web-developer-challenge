import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import type { Dispatch } from 'redux'

import Feed from '.'
import renderWithProvidersAndRouter from '../../tests/renderWithProvidersAndRouter'
import { manyPostsMock } from '../../tests/testMocks'
import { initialPosts } from '../../utils/initialPosts'
import { store } from '../../redux/store'
import { clearAll, publishPost } from '../../redux/postsSlice'


describe('Feed test', () => {
  let dispatch: Dispatch
  const postsMock = initialPosts

  beforeEach(() => {
    jest.spyOn(store, 'dispatch')
    dispatch = store.dispatch
  })

  afterEach(() => {
    dispatch(clearAll())
  })

  it('should render all posts', async() => {
    renderWithProvidersAndRouter(<Feed />)

    postsMock.map((post) => dispatch(publishPost(post)))

    const posts = await screen.findAllByTestId('post-card')

    expect(posts.length).toBe(3)
  })

  it('should render no post message', async() => {
    renderWithProvidersAndRouter(<Feed />)

    const posts = await screen.queryAllByTestId('post-card')
    const noPostMessage = screen.getByText(/Nenhuma postagem/)

    expect(noPostMessage).toBeInTheDocument()
    expect(posts.length).toBe(0)
  })

  it('should verify if the post has been successfully deleted', async () => {
    renderWithProvidersAndRouter(<Feed />)

    postsMock.map((post) => dispatch(publishPost(post)))

    const posts = await screen.findAllByTestId('post-card')

    expect(posts.length).toBe(3)

    const firstPostUser = screen.queryByText('Manuela Oliveira')
    expect(firstPostUser).toBeInTheDocument()

    const [ deleteButton ] = await screen.queryAllByTestId('delete-post')

    expect(deleteButton).toBeInTheDocument()
    fireEvent.click(deleteButton)

    const postUserDeleted = screen.queryByText('Manuela Oliveira')
    expect(postUserDeleted).not.toBeInTheDocument()
  })

  it('should render see more button', async() => {
    renderWithProvidersAndRouter(<Feed />)

    manyPostsMock.map((post) => dispatch(publishPost(post)))

    const posts = await screen.findAllByTestId('post-card')
    const seeMore = screen.getByTestId('see-more-posts')

    expect(posts.length).toBe(3)
    expect(seeMore).toBeInTheDocument()

    fireEvent.click(seeMore)

    const morePosts = await screen.findAllByTestId('post-card')

    expect(morePosts.length).toBe(6)
    expect(seeMore).toBeInTheDocument()

    fireEvent.click(seeMore)

    const manyPosts = await screen.findAllByTestId('post-card')

    expect(manyPosts.length).toBe(7)
    expect(seeMore).not.toBeInTheDocument()
  })
})
