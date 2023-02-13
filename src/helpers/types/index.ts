export interface Post {
  message: string;
  author: string;
  fileImg: string;
  id: string;
}

export interface FieldsPost {
  message: string;
  author: string;
  valueImg: string;
}

export enum Type {
  ChangeInput = "ChangeInput",
  FileImg = "FileImg",
  RemoveFileImg = "RemoveFileImg",
  AddPost = "AddPosts",
  RemovePost = "RemovePost",
  ResetFields = "ResetFields",
}

export type Action =
  | {
      type: Type.ChangeInput;
      payload: {
        name: string;
        value: string;
      };
    }
  | {
      type: Type.FileImg;
      payload: {
        value: string;
      };
    }
  | {
      type: Type.RemoveFileImg;
    }
  | {
      type: Type.AddPost;
    }
  | {
      type: Type.RemovePost;
      payload: {
        id: string;
      };
    }
  | {
      type: Type.ResetFields;
    };

export interface State {
  posts: Post[];
  fileImg: string;
  fields: FieldsPost;
}
