import { useAtom } from 'jotai'
import { ChangeEvent, useRef, useState } from 'react'
import { postsAtom } from '..'

function useCreatePostCard() {
  const [userPhoto, setUserPhoto] = useState('')
  const [userName, setUserName] = useState('')
  const [postText, setPostText] = useState('')

  const [actualPosts, setPosts] = useAtom(postsAtom)

  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleSubmit() {
    setPosts([
      ...actualPosts,
      {
        id: crypto.randomUUID(),
        text: postText,
        user: {
          name: userName,
          id: crypto.randomUUID(),
          photo: userPhoto,
        },
      },
    ])

    handleDiscard()
  }

  function handleDiscard() {
    setUserPhoto('')
    setUserName('')
    setPostText('')
  }

  function handleClickOnImage() {
    fileInputRef.current?.click()
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0]

    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
      setUserPhoto(reader.result as string)
    }

    reader.readAsDataURL(file)
  }

  return {
    userName,
    userPhoto,
    postText,
    canPublish: !!userName && !!postText,
    canDiscard: !!userName || !!postText || !!userPhoto,
    fileInputRef,
    setUserName,
    setPostText,
    handleFileChange,
    handleClickOnImage,
    handleDiscard,
    handleSubmit,
  }
}

export { useCreatePostCard }
