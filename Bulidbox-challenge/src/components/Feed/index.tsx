import React from 'react';
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
        <div className='flex items-center flex-col'>
            <div className='flex items-center justify-start' style={{ width: '600px' }}>
                <h2>Feed</h2>
            </div>
            {posts.map((post, index) => (
                <div key={index} className='my-10 bg-white bg-opacity-5 flex items-center justify-center'>
                    <div className='border border-zinc-700 rounded-sm pl-10 flex flex-col' style={{ width: '600px' }}>
                        <div className='flex justify-between items-start'>
                            <div className='flex justify-center p-2 items-center mt-10'>
                                <img className='rounded-full' src={post.photo} width={90} alt="" />
                            </div>
                            <div className='p-10'>
                                <button onClick={() => handleDelete(index)}><FaTrash color='white' /></button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-start ml-4 my-10'>
                            <div>
                                <span className='text-zinc-300'>{post.description}</span>
                                <div className='text-zinc-500'>
                                    <p className='text-sm text-zinc-500 font-medium'>Enviado por:</p>
                                    <h3 className='text-md'>{post.username}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feed;
