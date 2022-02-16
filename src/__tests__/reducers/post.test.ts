import { AnyAction } from 'redux';
import reducer, { addPost, Post, removePost } from '@/reducers/posts';

test('should return the initial state', () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual([]);
});

test('should add a post', () => {
  const post: Post = {
    id: 'uuid',
    name: 'Igor',
    message: 'Beer is soo good!',
    avatar: '',
  };

  expect(reducer([], addPost(post))).toEqual([
    {
      id: 'uuid',
      name: 'Igor',
      message: 'Beer is soo good!',
      avatar: '',
    },
  ]);
});

test('should add a post when have posts and new post need to be first', () => {
  const initialState: Post[] = [
    {
      id: 'uuid',
      name: 'Igor',
      message: 'Beer is soo good!',
      avatar: '',
    },
  ];

  const newPost: Post = {
    id: 'uuid_2',
    name: 'Jefferson',
    message: 'Hello world!',
    avatar: 'some_image_base64',
  };

  expect(reducer(initialState, addPost(newPost))).toEqual([
    {
      id: 'uuid_2',
      name: 'Jefferson',
      message: 'Hello world!',
      avatar: 'some_image_base64',
    },
    {
      id: 'uuid',
      name: 'Igor',
      message: 'Beer is soo good!',
      avatar: '',
    },
  ]);
});

test('should remove a post', () => {
  const initialState: Post[] = [
    {
      id: 'uuid',
      name: 'Igor',
      message: 'Beer is soo good!',
      avatar: '',
    },
  ];

  expect(reducer(initialState, removePost('uuid'))).toEqual([]);
});
