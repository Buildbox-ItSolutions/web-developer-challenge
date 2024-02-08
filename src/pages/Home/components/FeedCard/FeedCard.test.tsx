import { render } from '@testing-library/react'
import { describe, test } from 'vitest'
import { FeedCard } from '.'
import { Post } from '../../../../types'

vi.mock('@formkit/auto-animate/react', () => ({
  useAutoAnimate: () => [vi.fn()],
}))

describe('Feed Card Component', () => {
  test('should render card with correct information when user have a photo', () => {
    const postMock: Post = {
      id: '1',
      text: 'Post text',
      user: {
        id: '1',
        name: 'User Name',
        photo: 'user photo',
      },
    }

    const { getByRole, getByText } = render(<FeedCard post={postMock} />)

    expect(getByRole('img', { name: 'user photo' })).toBeDefined()
    expect(getByText('Post text')).toBeDefined()
    expect(getByText('User Name')).toBeDefined()
  })

  test('should render card with correct information when user does not have a photo', () => {
    const postMock: Post = {
      id: '1',
      text: 'Post text',
      user: {
        id: '1',
        name: 'User Name',
        photo: '',
      },
    }

    const { getByRole, getByText } = render(<FeedCard post={postMock} />)

    expect(getByRole('heading', { level: 4, name: 'UN' })).toBeDefined()
    expect(getByText('Post text')).toBeDefined()
    expect(getByText('User Name')).toBeDefined()
  })
})
