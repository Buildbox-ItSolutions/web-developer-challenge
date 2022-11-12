import { PostModelx } from "@/app/domain/models";

export interface AddPost {
  add(params: AddPost.Params): Promise<AddPost.Model>;
}

export namespace AddPost {
  export type Params = {
    id?: string;
    name: string;
    message: string;
    urlx: string;
  };

  export type Model = PostModelx;
}
