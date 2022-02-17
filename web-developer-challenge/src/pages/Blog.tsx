import { FormEvent, useState } from 'react';

import { Container } from '../components/Container';
import { Header } from '../components/Header';

import logo from '../assets/bx-logo.svg';

import '../styles/blog.css';
import { Post } from '../components/Post';

type TypePost = {
  counter: number;
  photo: string;
  name: string;
  message: string;
}

export function Blog() {
  const [photo, setPhoto] = useState('');
  const [name , setName] = useState('');
  const [message, setMessage] = useState('');
  const [post, setPost] = useState<TypePost[]>([]);
  const [counter, setCounter] = useState(0);
  
  function increment() {
    setCounter(counter + 1);
    return counter;
  }

  function handleToDiscard() {
    setMessage('');
    setName('');
    setPhoto('');
  }

  function handleSendPost(event: FormEvent) {
    console.log(event.target);
    event.preventDefault();

    if(name.trim() === '') {
      alert('Name is required');
    }

    if(message.trim() === '') {
      alert('Message is required');
    }

    if(photo.trim() === '') {
      alert('Photo is required');
    }

    const newPost = [{
      counter,
      photo,
      name,
      message
    }]

    setPost(newPost);
  
    setMessage('');
    setName('');
    setPhoto('');

    return post;
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Buildbox" />
      </Header>

      <main>
        <div className='new-post'>
          <form onSubmit={handleSendPost}>
            <input 
              name='input-file'
              className='input-photo'
              type="file"
              onChange={event => setPhoto(event.target.value)}
              value={photo} 
            />
            <input 
              className='input-text' 
              type="text" 
              placeholder='Digite seu nome'
              onChange={event => setName(event.target.value)} 
              value={name}
            />
            <textarea 
              placeholder='Mensagem'
              onChange={event => setMessage(event.target.value)}
              value={message}
            />
            <div className='buttons'>
              <button onClick={handleToDiscard} className='discard'>Descartar</button>
              { name && photo && message ? (
                <button onClick={increment} type='submit' className='submit' >Publicar</button>
              ) : (
                <button onClick={increment} type='submit' className='submit-disable' >Publicar</button>
              ) }
            </div>
          </form>
        </div>

        <div className='feed'>
          <p className='title'>Feed</p>
          {post.map(post => (
            <Post 
              key={post.counter}
              photo={post.photo}
              name={post.name}
              message={post.message}
            />
          ))}
        </div>
      </main>
    </Container>
  )
}
