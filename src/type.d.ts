interface IPost {
    id?: number
    name: string
    message: string
    image?: string | undefined
}

type PostState = {
    posts: IPost[]
}

type PostAction = {
    type: string
    post: IPost
}
  
type DispatchType = (args: PostAction) => PostAction