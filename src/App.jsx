import './App.css'
import React, { useState } from 'react';
import 'typeface-roboto'
import { Header } from './components/Headers';
import { Inputbox } from './components/Inputbox';
import { Feedbox } from './components/Feedbox';
import photobase from './assets/photo-base.png'
import photobase2 from './assets/photo-base2.png'

function App() {

  const [posts,setPosts] = useState([{
    mensagem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    imagem:<img src={photobase} alt='photobase'/>,
    autor:"Manuela Oliveira"
  },
  {
    mensagem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
    imagem:<img src={photobase2} alt='photobase2'/>,
    autor:"autorname2"
  },

]);
  
  return (
    <div className='wrapper' >
      <Header/>
      <div className='content'>
      <Inputbox setPosts={setPosts}/>
      <Feedbox setPosts={setPosts} posts={posts}/>      
      </div>

    </div>

  );
}

export default App;
