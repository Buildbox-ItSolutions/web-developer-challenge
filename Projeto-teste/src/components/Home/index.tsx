import Header from '../../components/Header';
import Card from '../../components/Card';
import Feed from '../../components/Feed';

import * as Styled from './styles';
import { useState } from 'react';

function Index() {
  const [newImage, setNewImage] = useState<any>('');
  const [newName, setNewName] = useState<any>('');
  const [newMessage, setNewMessage] = useState<string>('');
  const [posts, setPosts] = useState<any[]>([]);

  const randomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

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
    const aleatorio = randomNumber(1, 1000);
    const newPost = {
      id: aleatorio,
      name: newName,
      img: newImage,
      body: newMessage,
    };

    const allPosts = [];

    if (newName && newMessage && newImage) {
      allPosts.push(newPost);
      setPosts([...posts, ...allPosts]);
    } else {
      alert('Porfavor preencher todos os campos');
    }

    setNewName('');
    setNewMessage('');
    setNewImage('');
  };

  const handleClear = () => {
    setNewName('');
    setNewMessage('');
    setNewImage('');
  };

  const handDelete = (e: any, index: number) => {
    const removePost = [...posts];
    removePost.splice(index, 1);
    setPosts([...removePost]);
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
