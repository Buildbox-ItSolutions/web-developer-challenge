import { create } from "zustand"
import {v4 as uuidv4 } from 'uuid'

export interface Post {
    id: string;
    photo: string;
    createdBy: string;
    message: string;
}

type PostsStore = {
    posts: Post[];
    addPost: (item: Post) => void;
    removePost: (id: string) => void;
}

let initialPosts: Post[] = []

let toCreate = [{
        photo: "https://img.freepik.com/fotos-premium/uma-ilustracao-redonda-de-uma-paisagem-montanhosa-com-um-lago-e-montanhas-ao-fundo_902639-24791.jpg?w=826",
        createdBy: "Manuela Oliveira",
        message:"Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-Nulla-mattis-ligula-vel-velit-scelerisque-iaculis-Nam-mattis-justo-id-orci-commodo-eu-tempus-purus-cursus"
    },
    {
        photo: "https://img.freepik.com/fotos-premium/ilustracao-de-uma-paisagem-montanhosa-com-um-lago-e-montanhas-ao-fundo_902338-22099.jpg?w=826",
        createdBy: "Manuela Oliveira",
        message: 'Lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-Nulla-mattis-ligula-vel-velit-scelerisque-iaculis'
    }
]

for (let index = 0; index < toCreate.length; index++) {
    const newPost: Post = {
        id: uuidv4(), 
        photo: toCreate[index].photo,
        createdBy: toCreate[index].createdBy,
        message: toCreate[index].message
    };
    initialPosts.push(newPost); 
}

export const usePostStore = create<PostsStore>((set) => {
    return {
        posts: initialPosts,
        addPost: (item) => set((state) => ({posts: [...state.posts, item] })),
        removePost: (id) => set((state) => ({posts: state.posts.filter((item) => item.id !== id)}))
    }
})