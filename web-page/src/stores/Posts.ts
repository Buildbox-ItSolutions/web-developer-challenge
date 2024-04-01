import { create } from 'zustand'

interface PostStore {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

export const usePostsStore = create<PostStore>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}))
