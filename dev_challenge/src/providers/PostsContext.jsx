import React from 'react';
import { createContext, useContext, useState } from "react";
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import { toast } from 'react-toastify';


export const PostsContext = createContext({});

export const posts = [
    {
        "id": 1,
        "name": "Manuela Oliveira",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
        "icon": icon1,
    },
    {
        "id": 2,
        "name": "Manuela Oliveira",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.",
        "icon": icon2,
    }
]

export const PostsProvider = ({ children }) => {

    const [postList, setPostList] = useState(posts);
    const [newImg, setNewImg] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const [inputValues, setInputValues] = useState({
        id: postList.length + 1,
        name: '',
        message: '',
        icon: ''
    });

    const createPost = async (newPost) => {
        try {
            setPostList([...postList, newPost])
            toast.success("Post criado com sucesso!")
        } catch (error) {
            toast.error("Falha ao criar o post, revise as informações!")
        }
    }

    const deletePost = async (postId) => {
        try {
            setPostList(postList.filter(item => item.id !== postId));
            toast.success("Post removido com sucesso!")
        } catch (error) {
            toast.error("Falha ao remover post!");
        }
    }

    return (
        <PostsContext.Provider value={{
            postList, createPost, deletePost, inputValues, setInputValues, selectedImage, setSelectedImage
        }} >
            {children}
        </PostsContext.Provider >
    )
};