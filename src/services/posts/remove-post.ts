import { db } from '../../infra/db'

type RemovePostParams = {
  postId: string
}

export async function removePost({ postId }: RemovePostParams) {
  db.removePost(postId)
}
