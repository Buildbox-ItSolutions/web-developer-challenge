import {v4 as uuidv4 } from 'uuid'
import photobase from "../../public/photo-base@2x.png"
import photobase2 from "../../public/photo-base2.png"

export interface Post {
    id: string;
    photo: string;
    createdBy: string;
    message: string;
}

let posts: Post[] = []

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
    posts.push(newPost); 
}

export const getPosts = () => {
    return posts.reverse();
}

export const createPost = (post: Post) => {
    posts.push(post)
}

export const deletePost = (id: string) => {
    const index = posts.findIndex(post => post.id == id);
    if (index !== -1) {
        posts.splice(index, 1);
        return true; 
    }
    return false; 
}