import React, { useState } from 'react';
import Card from './components/card';
import ImageInput from './components/image';
import Input from './components/input';
import { AppContainer, Button, ButtonRow, ContainerWrapper, PostForm, PostListContainer } from './styles/app.styles';
import TextArea from './components/textArea';
import Header from './components/header';

export interface Post {
  id: number;
  name: string;
  message: string;
  image: string; 
}

export default function App(){
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post>({ id: 1, name: '', message: '', image: '' });
  const [id, setId] = useState(1);
  const [allowedSubmit, setAllowedSubmit] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPost(prevPost => ({
      ...prevPost,
      [name]: value
    }));
    if (newPost.name.trim() !== '' && newPost.message.trim() !== '' && newPost.image.trim() !== ''){
      setAllowedSubmit(true)
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageBase64 = reader.result as string;
        
        // Salvar a imagem no localStorage
        localStorage.setItem(`${id}`, imageBase64);
  
        setNewPost(prevPost => ({
          ...prevPost,
          image: imageBase64
        }));
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = () => {
    if (allowedSubmit) {
      setPosts(prevPosts => [...prevPosts, { ...newPost, id: id }]);
  
      setNewPost(prevPost => ({
        ...prevPost,
        id: id + 1, name: '', message: '', image: ''
      }));
      setId(id + 1);
      setAllowedSubmit(false)
    }else{
      setAllowedSubmit(false)
    }
  };

  const handleClean =() => {
    setNewPost({
      id: id,
      image: '',
      message:'',
      name: ''
    })

    setAllowedSubmit(false)
  }

  const handleDelete =(post: Post) => {
    const temp = posts.filter(obj => obj.id !== post.id)
    setPosts(temp)
  }

  const onDeleteImage = () => {
    setNewPost(prevPost => ({
      ...prevPost,
       image: ''
    }));
  }

  return (
    <ContainerWrapper>
      <Header />
      <AppContainer>
        <PostForm>
          <ImageInput imageUrl={newPost.image} setNewPost={setNewPost} onDeleteImage={onDeleteImage}/>
          <Input onChange={handleInputChange} placeholder='Digite seu nome' value={newPost.name} name='name' />
          <TextArea id="message" name="message" value={newPost.message} onChange={handleInputChange} placeholder='Mensagem'/>
          <ButtonRow>
            <Button onClick={handleClean} underline color='#5F5F5F'>Descartar</Button>
            <Button onClick={handleSubmit} backgroundColor={allowedSubmit ? '#71BB00' : '#5F5F5F'} color={allowedSubmit? 'white':'#404040'}>Publicar</Button>
          </ButtonRow>
        </PostForm>

        <PostListContainer className="post-list">
          {posts.length > 0 && <p>Feed</p>}
          {posts.slice().reverse().map((post: Post) => (
            <Card key={post.id} post={post} onDelete={() => handleDelete(post)} />
        ))}
        
    </PostListContainer>
      </AppContainer>
    </ContainerWrapper>
  );
};

