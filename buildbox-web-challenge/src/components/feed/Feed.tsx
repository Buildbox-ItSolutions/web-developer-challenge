import CardFeed from "../cardfeed/CardFeed"
import { Titulo } from "./Styles"
// import IPost from "../../interfaces/IPost";
import { useState } from "react";
import dbData from '../../../db.json';


const Feed = () => {
    const [posts, setPosts] = useState(dbData.posts);

    const handleRemovePost = (postId: string) => {
        const confirmRemove = window.confirm('Tem certeza de que deseja remover este post?');
        if (confirmRemove) {
            fetch(`http://localhost:4000/posts/${postId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                window.alert("Não foi possível remover o post")
                throw new Error('Erro ao remover post');
            }

            window.alert("Post removido com sucesso");
            setPosts(posts.filter(post => post.id !== postId));
        })
        .catch(error => {
            console.error('Erro ao remover post:', error);
        });
        }
    };

    return (
        <div>
            <Titulo>
                Feed
            </Titulo>
            {posts.map((post: { id: string; foto: string; texto: string; autor: string; }) => (
                <div>
                    <CardFeed 
                        id={post.id} 
                        foto={post.foto} 
                        texto={post.texto} 
                        autor={post.autor}
                        onRemove={() => handleRemovePost(post.id)}
                    />
                </div>
            ))}
        </div>
    )
}

export default Feed