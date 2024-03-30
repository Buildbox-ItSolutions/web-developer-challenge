import { db } from '../../infra/db'

export async function fetchPosts() {
  return db.getPosts()
}
