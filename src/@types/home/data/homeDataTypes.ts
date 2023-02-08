import { postType } from "./postReducer";

export type inputElementType = {
    avatar: string;
    name: string;
    post: string;
    change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    trash: () => void;
    nameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    postChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    discart: () => void;
    addPost: () => void;
}

export type publishElementType = {
    posts: postType[];
    deletePost: (id: string) => void;
}
