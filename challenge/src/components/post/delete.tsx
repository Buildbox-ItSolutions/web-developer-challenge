'use client'
import { usePostStatus } from '@/hook/postStatusContext'
import { FormEvent } from 'react'
import { GoXCircle } from 'react-icons/go'

export const Delete = ({ id }: { id: string }) => {
  const { setPostAdded } = usePostStatus()
  function handleDelete(e: FormEvent) {
    e.preventDefault()
    if (confirm('Tem certeza que quer excluir o post?')) {
      localStorage.removeItem(`post_${id}`)
      setPostAdded(true)
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="self-end mr-4 mt-2 font-thin text-trash cursor-pointer"
    >
      <GoXCircle className="w-5 h-5" />
    </button>
  )
}
