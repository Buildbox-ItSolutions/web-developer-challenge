export interface PostParams {
  uuid: string
  image: string
  name: string
  message: string
}

export interface FormProps {
  addPost: (post: PostParams) => void
}

export type HTMLElement = HTMLInputElement & HTMLTextAreaElement
