import React, { useState } from 'react';
import Header from './components/Header';
import AddPostForm from './components/AddPostForm';
import ListPosts from './components/ListPosts';

const App = () => {
  const [posts, addPostList] = useState([]);
  
  return (
    <div className="App">
        <Header/>
        <AddPostForm posts={posts} addPostList={addPostList}/>
        <ListPosts posts={posts} addPostList={addPostList}/>
    </div>
  )
}

export default App