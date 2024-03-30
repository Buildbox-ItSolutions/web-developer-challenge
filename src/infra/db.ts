import { Post } from '../@types/post'

class DB {
  private posts: Post[] = []

  constructor() {
    const posts = localStorage.getItem('posts')
    if (posts) {
      this.posts = JSON.parse(posts)
    }
  }

  getPosts() {
    return this.posts
  }

  addPost(post: Post) {
    this.posts.push(post)
    localStorage.setItem('posts', JSON.stringify(this.posts))
  }

  removePost(postId: string) {
    this.posts = this.posts.filter((post) => post.id !== postId)
    localStorage.setItem('posts', JSON.stringify(this.posts))
  }
}

export const db = new DB()
