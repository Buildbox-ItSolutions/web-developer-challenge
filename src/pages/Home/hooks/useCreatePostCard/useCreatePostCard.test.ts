import { act, renderHook } from "@testing-library/react"
import { useAtom } from "jotai"
import { describe, test } from "vitest"
import { useCreatePostCard } from "."

vi.mock("@formkit/auto-animate/react", () => ({
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
// @ts-expect-error global is defined
global.crypto.randomUUID = vi.fn(() => 'mocked-uuid');

describe("Create Post Card Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("should discard all information", () => {
    useAtomMock.mockReturnValue([[], vi.fn()])

    const { result } = renderHook(useCreatePostCard)

    const {
      handleDiscard,
      setUserName,
      setUserPhoto,
      setPostText,
      userName,
      userPhoto,
      postText,
    } = result.current

    act(() => {
      setUserName("Test User")
      setUserPhoto("Test Photo")
      setPostText("Test Post")
    })

    act(handleDiscard)

    expect(userName).toBe("")
    expect(userPhoto).toBe("")
    expect(postText).toBe("")
  })

  test("should submit post and clear all data", () => {
    const setPostsMock = vi.fn()

    useAtomMock.mockReturnValue([mockPosts, setPostsMock])

    const { result } = renderHook(useCreatePostCard)
    const { handleSubmit } = result.current

    act(handleSubmit)

    expect(setPostsMock).toBeCalledWith([{
      id: 'mocked-uuid',
      text: '',
      user: {
        name: '',
        id: 'mocked-uuid',
        photo: '',
      },
    }, ...mockPosts])
  })

  test.todo("when handle click on image, should dispatch click event of file input")
})
