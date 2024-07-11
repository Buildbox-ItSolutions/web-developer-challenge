import React from 'react';
import styled from 'styled-components';
import { FaTrash } from "react-icons/fa";

type Post = {
    username: string;
    description: string;
    photo: string;
};

type FeedProps = {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};



const Feed: React.FC<FeedProps> = ({ posts, setPosts }) => {
    const handleDelete = (index: number) => {
        setPosts(posts.filter((_, i) => i !== index));
    };

    return (
        <FeedContainer>
            <FeedHeader>
                <FeedTitle>Feed</FeedTitle>
            </FeedHeader>
            {posts.map((post, index) => (
                <PostContainer key={index}>
                    <PostContent>
                        <PostHeader>
                            <PostImageContainer>
                                <PostImage src={post.photo} width={90} height={90}  alt="imagem" />
                            </PostImageContainer>
                            <DeleteButtonContainer>
                                <DeleteButton onClick={() => handleDelete(index)}><FaTrash color='white' /></DeleteButton>
                            </DeleteButtonContainer>
                        </PostHeader>
                        <PostBody>
                            <PostDescription>{post.description}</PostDescription>
                            <PostSenderInfo>
                                <SenderTitle>Enviado por:</SenderTitle>
                                <SenderName>{post.username}</SenderName>
                            </PostSenderInfo>
                        </PostBody>
                    </PostContent>
                </PostContainer>
            ))}
        </FeedContainer>
    );
};

const FeedContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const FeedHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 600px;
`;

const FeedTitle = styled.h2`

`;

const PostContainer = styled.div`
    margin: 2.5rem 0;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PostContent = styled.div`
    border: 1px solid #3f3f46;
    border-radius: 0.125rem;
    padding-left: 2.5rem;
    display: flex;
    flex-direction: column;
    width: 600px;
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
`;

const PostImageContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    align-items: center;
    margin-top: 2.5rem;
`;

const PostImage = styled.img`
    border-radius: 100%;
`;

const DeleteButtonContainer = styled.div`
    padding: 2.5rem;
`;

const DeleteButton = styled.button`
    // You can add more styles if needed
`;

const PostBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 1rem;
    margin: 2.5rem 0;
`;

const PostDescription = styled.span`
    color: #a1a1aa; // Equivalent to text-zinc-300
`;

const PostSenderInfo = styled.div`
    color: #71717a; // Equivalent to text-zinc-500
`;

const SenderTitle = styled.p`
    font-size: 0.875rem; // Equivalent to text-sm
    font-weight: 500; // Equivalent to font-medium
`;

const SenderName = styled.h3`
    font-size: 1rem; // Equivalent to text-md
`;

export default Feed;
