import { act, renderHook } from '@testing-library/react'
import { useAtom, useAtomValue } from 'jotai'
import { describe } from 'vitest'
import { useHome } from '.'

const useAtomMock = vi.hoisted(() => vi.fn(() => ({ ...useAtom })))
const useAtomValueMock = vi.hoisted(() => vi.fn(() => ({ ...useAtomValue })))

vi.mock('@formkit/auto-animate/react', () => ({
  useAutoAnimate: () => [vi.fn()],
}))

vi.mock('jotai', () => ({
  useAtom: useAtomMock,
  useAtomValue: useAtomValueMock
}))

describe('Home Hook', () => {
  test('should return posts correctly', () => {
    const postsMock = [{ id: 1, title: 'Post 1' }];

    useAtomValueMock.mockReturnValue(postsMock);

    useAtomMock.mockReturnValue([Boolean, vi.fn()])

    const {result: {current: { posts}}} = renderHook(useHome)

    expect(posts).toEqual(postsMock)
  })

  test('should switch to light mode', () => {
    const setDarkModeMock = vi.fn()
    const darkMode = true

    useAtomValueMock.mockReturnValue([])

    useAtomMock.mockReturnValue([darkMode, setDarkModeMock])

    const {result: {current: {handleSwitchTheme}}} = renderHook(useHome)

    act(handleSwitchTheme)

    expect(setDarkModeMock).toBeCalledWith(false)
  })

  test('should switch to dark mode', () => {
    const setDarkModeMock = vi.fn()
    const darkMode = false

    useAtomValueMock.mockReturnValue([])

    useAtomMock.mockReturnValue([darkMode, setDarkModeMock])

    const {result: {current: {handleSwitchTheme}}} = renderHook(useHome)

    act(handleSwitchTheme)

    expect(setDarkModeMock).toBeCalledWith(true)
  })
})
