import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostContext from './context/PostContext';

import { Header } from './components';
import { Home } from './pages';

const App = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [posts, setPosts] = useState([]);
  const [loadedImage, setLoadedImage] = useState('');
  const [form, setForm] = useState({
    name: '',
    postText: '',
    image: '',
  });
  return (
    <PostContext.Provider
      value={{
        isDisabled,
        setIsDisabled,
        posts,
        setPosts,
        loadedImage,
        setLoadedImage,
        form,
        setForm,
      }}
    >
      <BrowserRouter>
        <Header />
        <main className='w-full h-screen bg-[#343434] bg-cover min-h-fit'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </PostContext.Provider>
  );
};

export default App;
