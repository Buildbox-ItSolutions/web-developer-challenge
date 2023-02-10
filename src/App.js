import "./App.css";
import Header from "./components/Header";
import NewPost from "./components/NewPost";
import PostCard from "./components/PostCard";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const [photo, setPhoto] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [preview, setPreview] = useState(null);

  const handlePhotoChange = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemovePhoto = (event) => {
    setPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo !== null && name.length >= 1 && message.length >= 1) {
      setPosts([{ id: posts.length + 1, photo, message, name }, ...posts]);
      setPhoto("");
      setMessage("");
      setName("");
      setPreview(null);
    }
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleDiscart = () => {
    setPhoto("");
    setMessage("");
    setName("");
    setPreview(null);
  };

  return (
    <div className="App">
      <Header />
      <NewPost
        states={{
          name: name,
          setName: setName,
          message: message,
          setMessage: setMessage,
          photo: photo,
          setPhoto: setPhoto,
          preview: preview,
        }}
        handleFunctions={{
          handlePhotoChange: handlePhotoChange,
          handleRemovePhoto: handleRemovePhoto,
          handleSubmit: handleSubmit,
          handleDelete: handleDelete,
          handleDiscart: handleDiscart,
        }}
      />
      <div className="feed">
        <h3>Feed</h3>
        {posts.map((post) => {
          return (
            <PostCard key={post.id} post={post} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
