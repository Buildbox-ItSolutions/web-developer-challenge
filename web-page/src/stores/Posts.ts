import create from 'zustand';
import { persist } from 'zustand/middleware';

interface Post {
  id: string;
  blur_hash?: string;
  urlSmall: string;
  userName: string;
  description: string;
}
interface PostStore {
  post: Post | null;
  posts: Post[];
  removingPosts: string[];
  setPost: (post: Post | null) => void;
  setPosts: (posts: Post[] | ((prevPosts: Post[]) => Post[])) => void;
  removePost: (id: string) => void;
  setRemovingPosts: (posts: string[] | ((prevPosts: string[]) => string[])) => void;
}

export const usePostsStore = create<PostStore>()(persist(
  (set) => ({
    isModalOpen: false,
    post: null,
    posts: [],
    removingPosts: [],
    setRemovingPosts: (posts) => set((state) => ({
      removingPosts: typeof posts === 'function' ? posts(state.removingPosts) : posts
    })),
    setPost: (post) => set({ post }),
    setPosts: (posts) => set((state) => ({
      posts: typeof posts === 'function' ? posts(state.posts) : posts
    })),
    removePost: (id: string) => {
      set((state) => ({
        removingPosts: [...state.removingPosts, id]
      }));
      setTimeout(() => {
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
          removingPosts: state.removingPosts.filter((postId) => postId !== id)
        }));
      }, 500);
    }
  }),
  {
    name: 'postsStore', // Nome único para o armazenamento local
    getStorage: () => localStorage, // Pode ser localStorage ou sessionStorage
  }
));
