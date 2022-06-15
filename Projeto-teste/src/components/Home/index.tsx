import Header from '../../components/Header';
import Card from '../../components/Card';
import Feed from '../../components/Feed';

import * as Styled from './styles';
import { useState } from 'react';

function Index() {
  const [newImage, setNewImage] = useState<string>('');
  const [newName, setNewName] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>('');
  const [posts, setPosts] = useState<string[]>([]);
  const [index] = useState<number>(-1);

  const handleName = (e: any) => {
    setNewName(e.target.value);
  };

  const handleMensagem = (e: any) => {
    setNewMessage(e.target.value);
  };

  const handleImage = (e: any) => {
    setNewImage(e.target.files[0]);
  };

  const removeImage = () => {
    setNewImage('');
  };

  const handleSubmit = () => {
    if (
      newName === '' ||
      newName.length === 0 ||
      newMessage === '' ||
      newMessage.length === 0
    ) {
      window.alert("Preencha todos os campos antes de adicionar! ¬¬'");
    } else {
      const newPost = [
        ...posts,
        {
          name: newName,
          img: newImage,
          body: newMessage,
        },
      ];

      setPosts(newPost);
    }
  };

  return (
    <div>
      <Styled.Container>
        <Header />
        <Card
          newImage={newImage}
          setNewImage={setNewImage}
          newName={newName}
          newMessage={newMessage}
          handleImage={handleImage}
          handleName={handleName}
          handleMensagem={handleMensagem}
          handleClear={handleClear}
          handleSubmit={handleSubmit}
          removeImage={removeImage}
        />
        <Feed posts={posts} handDelete={handDelete} />
      </Styled.Container>
    </div>
  );
}

export default Index;
