import imageBase1 from "../assets/photo-base@3x.png";
import imagebase2 from "../assets/photo-base2@3x.png";
import { create } from "zustand";
interface iPostStore {
  posts: iPost[];
  setPosts: (newPosts: iPost[]) => void;
  toRemove: number | null;
  setToRemove: (toRemove: number) => void;
  openConfirm: boolean;
  setOpenConfirm: (value: boolean) => void;
}
interface iPost {
  content: string;
  author: string;
  img: string;
}
let postsDefault: iPost[] = [
  {
    author: "Manuela Oliveira",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    img: imageBase1,
  },
  {
    author: "Manuela Oliveira",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae",
    img: imagebase2,
  },
];
const localPosts = localStorage.getItem("@postsLocalBuilBox");
if (!localPosts) {
  localStorage.setItem("@postsLocalBuilBox", JSON.stringify(postsDefault));
} else {
  postsDefault = JSON.parse(localPosts);
}
export const postStore = create<iPostStore>()((set) => ({
  posts: postsDefault,
  setPosts: (newPosts: iPost[]) =>
    set(
      () => (
        localStorage.setItem("@postsLocalBuilBox", JSON.stringify(newPosts)),
        { posts: newPosts }
      )
    ),
  toRemove: null,
  setToRemove: (toRemove: number) => set(() => ({ toRemove: toRemove })),
  openConfirm: false,
  setOpenConfirm: (value: boolean) => set(() => ({ openConfirm: value })),
}));
