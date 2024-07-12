'use client'
import { CreatePost } from '@/components/post/create'
import { GetPost } from '@/components/post/getPost'
import { PostStatusProvider } from '@/hook/postStatusContext'

export default function Home() {
  return (
    <div className="px-2">
      <PostStatusProvider>
        <CreatePost />
        <GetPost />
      </PostStatusProvider>
    </div>
  )
}
