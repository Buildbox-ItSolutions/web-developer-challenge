import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useAtom, useAtomValue } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useEffect } from 'react'
import { Post } from '../../../../types'

const postsAtom = atomWithStorage('posts', [] as Post[])
const darkModeAtom = atomWithStorage('darkMode', document.documentElement.classList.contains('dark'))

function useHome() {
  const posts = useAtomValue(postsAtom)
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  const [parent] = useAutoAnimate({
    duration: 300,
    easing: 'linear',
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark')
  }, [darkMode])

  // TODO: handle user's preferences system change

  function handleSwitchTheme() {
    setDarkMode(!darkMode)
  }

  return {
    posts,
    darkMode,
    parent,
    handleSwitchTheme,
  }
}

export { darkModeAtom, postsAtom, useHome }
