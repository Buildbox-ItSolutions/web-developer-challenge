import { useAtom } from 'jotai'
import { postsAtom } from '..'
import { Post } from '../../../../types'

function useFeedCard() {
  const [actualPosts, setPosts] = useAtom(postsAtom)

  function handleDeletePost(id: Post['id']) {
    const newPosts = [...actualPosts].filter((post) => post.id !== id)

    setPosts(newPosts)
  }

  return {
    handleDeletePost,
  }
}

export { useFeedCard }
