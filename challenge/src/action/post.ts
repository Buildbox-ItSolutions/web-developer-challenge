export class Post {
  data: Array<{ image: string; name: string; message: string }> | undefined

  constructor() {
    if (!this.data) {
      this.data = []
    }
  }

  public SetPost(dados: { image: string; name: string; message: string }) {
    if (!this.data) {
      this.data = []
    }
    this.data.unshift(dados)
  }

  public GetPosts():
    | Array<{ image: string; name: string; message: string }>
    | undefined {
    console.log(this.data)

    return this.data
  }
}
