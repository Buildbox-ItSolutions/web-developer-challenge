import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Post } from '../../../../types'

const postsAtom = atomWithStorage('posts', [] as Post[])

function useHome() {
  const [posts] = useAtom(postsAtom)

  return {
    posts,
  }
}

export { postsAtom, useHome }
