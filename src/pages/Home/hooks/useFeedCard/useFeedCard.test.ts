import { act, renderHook } from '@testing-library/react'
import { useAtom } from 'jotai'
import { describe, test } from 'vitest'

import { useFeedCard } from '.'

vi.mock('@formkit/auto-animate/react', () => ({
  useAutoAnimate: () => [vi.fn()],
}))

vi.mock('jotai', () => ({
  useAtom: useAtomMock,
}))

const useAtomMock = vi.hoisted(() => vi.fn(() => ({ ...useAtom })))

const mockPosts = [
  { id: '1', user: { id: '1', name: 'user 1' }, text: '' },
  { id: '2', user: { id: '2', name: 'user 2' }, text: '' },
]

describe('Feed Card Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should delete post', () => {
    const setPostsMock = vi.fn()

    useAtomMock.mockReturnValue([mockPosts, setPostsMock])

    const { result } = renderHook(useFeedCard)
    const { handleDeletePost } = result.current

    act(() => handleDeletePost('1'))

    expect(setPostsMock).toBeCalledWith([mockPosts[1]])
  })
})
