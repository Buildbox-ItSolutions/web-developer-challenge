import React from 'react';

import { CreatePost, Feed } from '../components';

const Home = () => {
  return (
    <section className='flex justify-center flex-col'>
      <CreatePost />
      <Feed />
    </section>
  );
};

export default Home;
