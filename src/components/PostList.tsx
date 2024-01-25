import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PostInterface, PostListInterface } from '../interfaces/PostInterface';
import Post from './Post';

const PostList: React.FC = () => {
  const posts = useSelector((state: PostListInterface) => state.posts);
  const [qtyRecentPosts, setQtyRecentPosts] = useState(0);

  const updateQtyRecentPosts = () => {
    const now = new Date();
    const recentPosts = posts.filter((item: PostInterface) => {
      // Filtra somente os Posts feitos nos últimos 5 minutos (id contém a data de inserção)
      return Math.round((now.getTime() - item.id) / (5 * 60 * 1000)) === 0;
    });

    setQtyRecentPosts(recentPosts.length);
  };

  useEffect(() => {
    updateQtyRecentPosts();
    const intervalId = setInterval(updateQtyRecentPosts, 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [posts]);

  return (
    <div>
      <div className="px-1">
        <p className="text-sm leading-8 text-gray-600">
          Feed
        </p>
      </div>
      {posts.map(post => (
        <article key={post.id} className="relative bg-white mb-4 border border-gray-300 p-4 rounded-md shadow-md flex flex-col items-start justify-end">
          <Post key={post.id} {...post} />
        </article>
      ))}
      <p className="text-sm leading-8 text-gray-600">Quantidade de posts recentes: {qtyRecentPosts}</p>
    </div>
  );
};

export default PostList;
