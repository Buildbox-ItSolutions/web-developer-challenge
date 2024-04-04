import { useState } from 'react';
import { useChangeImage, images } from '../hooks/useChangeImage'

interface Post {
    id: number;
    name: string;
    message: string;
    imageIndex?: number;
}

export const usePost = () => {
    const [post, setPost] = useState<Post[]>([]);
    const [nameInput, setNameInput] = useState<string>('');
    const [messageInput, setMessageInput] = useState<string>('');
    const { setCurrentImageIndex, currentImageIndex, handleTrashClick} = useChangeImage();

    const addNewPost = (newName: string, newMessage: string) => {
        const newPost: Post = {
            id: post.length,
            name: newName,
            message: newMessage,
            imageIndex: currentImageIndex
        };
        
        const updatedPost: Post[] = [...post, newPost];
        setPost(updatedPost);
    
        const nextImageIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextImageIndex);
    }

    const deletePost = (postId: number) => {
        const updatedPost: Post[] = post.filter(item => item.id !== postId);
        setPost(updatedPost);
    }

    const clearInputs = () => {
        setNameInput('');
        setMessageInput('');
    }

    const handlePublish = () => {
        if (nameInput && messageInput) { 
            addNewPost(nameInput, messageInput);
            clearInputs(); 
        } else {
            alert('Por favor, preencha todos os campos.'); 
        }
    }

    const handleImageChange = () => {
        handleTrashClick();
    }

    return {
        post,
        deletePost,
        nameInput,
        setNameInput,
        messageInput,
        setMessageInput,
        clearInputs,
        handlePublish,
        handleImageChange,
        currentImageIndex
    };
}
