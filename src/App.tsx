import React from 'react';
import { Provider } from 'react-redux';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostStore from './redux/PostStore';

const App: React.FC = () => {
  return (
    <Provider store={PostStore}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-8 pb-12 pt-2 md:px-48 lg:px-80">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">buildbox</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Web Chalenge
          </p>
        </div>
        <PostForm />
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
