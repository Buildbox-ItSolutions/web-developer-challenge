import { PostModelx } from "@/app/domain/models";

export interface LoadPosts {
  load(): Promise<LoadPosts.Model>;
}

export namespace LoadPosts {
  export type Model = { posts: PostModelx[] };
}
