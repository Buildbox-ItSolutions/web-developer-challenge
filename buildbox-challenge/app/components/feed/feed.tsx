"use client"
import { useContext } from "react";
import { FeedContainer, PostsContainer } from "./feedStyled";
import { ContextPost } from "@/app/context/ContextPost";
import Post from "../post/post";
const Feed = () => {
    const { posts, setPosts } = useContext(ContextPost);
    const handleDeletePost = (id: string) => {
        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <FeedContainer>
            <h3>Feed</h3>
            {posts.length > 0 ? (
                <PostsContainer>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            imageUrl={post.imageUrl}
                            name={post.name}
                            message={post.message}
                            deletePost={handleDeletePost}
                        />
                    ))}
                </PostsContainer>
            ) : (
                <p>Nenhum post publicado!</p>
            )}
        </FeedContainer>
    );
}

export default Feed;