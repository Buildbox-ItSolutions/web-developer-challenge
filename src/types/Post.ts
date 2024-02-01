import { User } from "."

interface Post {
  id: string
  user: User
  text: string
}

export type { Post }
