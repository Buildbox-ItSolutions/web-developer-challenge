import React from 'react';

type Post = {
    username: string;
    description: string;
};

type FeedProps = {
    posts: Post[];
};

const Feed: React.FC<FeedProps> = ({ posts }) => {
    return (
        <div className='flex items-center flex-col'>
            <div className='flex items-center justify-start' style={{ width: '600px' }}>
                <h2>Feed</h2>
            </div>
            {posts.map((post, index) => (
                <div key={index} className='my-10 flex items-center justify-center'>
                    <div className='border border-zinc-700 rounded-sm p-2 flex' style={{ width: '600px' }}>
                        <div className='flex justify-center items-center my-10'>
                            <img className='rounded-full' src="/src/assets/icon-img.png" width={90} alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-start ml-4 my-10'>
                            <div>
                                <span className='text-zinc-300'>{post.description}</span>
                                <div className='text-zinc-500'>
                                    <p className='text-sm font-medium'>Enviado por:</p>
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
