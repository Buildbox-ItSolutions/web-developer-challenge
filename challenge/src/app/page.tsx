import { CreatePost } from '@/components/post/create'
import { GetPost } from '@/components/post/getPost'

export default function Home() {
  return (
    <div>
      <CreatePost />
      <GetPost />
    </div>
  )
}
