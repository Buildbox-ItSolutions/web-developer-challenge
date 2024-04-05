import { useState } from "react";
import { IPost } from "./interfaces";
import { PostsList } from "./components/PostList";
import { GlobalStyle, PostMain, DivImage, InputImage, NameInput, MessageInput, ButtonInput} from "./style";
import { Header } from "./components/Header";
import ImageIcon from '@mui/icons-material/Image';

const App: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState('');

  const handleAddPost = () => {
    const newPost: IPost = {
      id: Date.now(),
      name,
      message,
      photo,
    };
    setPosts([...posts, newPost]);
    setName('');
    setMessage('');
    setPhoto('');
  };

  const handleRemovePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <PostMain>
        <DivImage>
          <ImageIcon />
        </DivImage>
        <InputImage          
            type="text"
            placeholder=""
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          
        />
        <NameInput
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <MessageInput
          type="text"
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ButtonInput onClick={handleAddPost}>Adicionar Post</ButtonInput>
      </PostMain>
      <PostsList posts={posts} onRemove={handleRemovePost} />
    </>
  );
};

export default App;
