import React, { useState, ChangeEvent, FormEvent } from "react";

interface Post {
  title: string;
  content: string;
}

interface CreateAreaProps {
  onAdd: (post: Post) => void;
}

const CreatePost: React.FC<CreateAreaProps> = ({ onAdd }) => {
  const [post, setPost] = useState<Post>({ title: "", content: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const submitPost = (event: FormEvent) => {
    onAdd(post);
    setPost({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-post">
      <input
          name="title"
          onChange={handleChange}
          value={post.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={post.content}
        />
      <button onClick={submitPost}>
        Adicionar
      </button>
      </form>
    </div>
  );
};

export default CreatePost;
