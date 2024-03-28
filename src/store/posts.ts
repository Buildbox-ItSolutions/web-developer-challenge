import {create} from 'zustand'
import { Post } from '../types/post'


interface PostsState {

    posts: Post[],
    deletePost: (index:number) =>void;
    addPost: (post:Post) => void;
}

const useStore = create<PostsState>()((set)=>({
    posts:[],
    deletePost:(index) => set((state) => ({posts: state.posts.filter((post, i) => i !== index)})),
    addPost: (post) => set((state) => {
        const listPost = state.posts
        listPost.unshift(post)
        return { posts:listPost}
    })
}))

export default useStore

