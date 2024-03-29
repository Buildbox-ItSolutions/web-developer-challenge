import React from "react";

interface PostProps {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
}

const Post: React.FC<PostProps> = ({ id, title, content, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>delete</button>
    </div>
  );
}

export default Post;
