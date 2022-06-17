export interface PostData {
  author: string
  message: string
  photo: string
}

export interface PostProps {
  data: PostData
  index: number
}
