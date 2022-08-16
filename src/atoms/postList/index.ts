import { atom } from 'recoil';

export interface IPost {
    id: string;
    message: string;
    image: string;
    name: string;
}

export const postsListState = atom({
    key: 'PostList',
    default: [] as IPost[],
});
