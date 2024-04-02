import create from 'zustand';
import { persist } from 'zustand/middleware';

interface Post {
  id: string;
  urlSmall: string;
  userName: string;
  description: string;
}
interface PostStore {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  urlSmall: string;
  setUrlSmall: (urls: string) => void;
  userName: string;
  setUserName: (name: string) => void;
  description: string;
  setDescription: (description: string) => void;
  post: {
    id: string;
    urlSmall: string;
    userName: string;
    description: string;
  };
  setPost: (post: Post) => void;
  posts: Post[];
  setPosts: (posts: Post[] | ((prevPosts: Post[]) => Post[])) => void;
  removePost: (id: string) => void;
}

export const usePostsStore = create<PostStore>()(persist(
  (set) => ({
    isModalOpen: false,
    post: {
      id: '',
      urlSmall: '',
      userName: '',
      description: '',
    },
    posts: [],
    setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
    urlSmall: '',
    setUrlSmall: (url) => set({ urlSmall: url }),
    userName: '',
    setUserName: (name) => set({ userName: name }),
    description: '',
    setDescription: (description) => set({ description }),
    setPost: (post) => set({ post }),
    setPosts: (posts) => set((state) => ({
      posts: typeof posts === 'function' ? posts(state.posts) : posts
    })),
    removePost: (id: string) => set((state) => ({
      posts: state.posts.filter((post) => post.id !== id)
    }))
  }),
  {
    name: 'postsStore', // Nome único para o armazenamento local
    getStorage: () => localStorage, // Pode ser localStorage ou sessionStorage
  }
));
