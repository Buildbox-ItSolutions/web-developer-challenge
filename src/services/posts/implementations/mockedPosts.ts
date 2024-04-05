import { Post } from '../../../@types/Post';
import { randomString } from '../../../utils/randomString';

export const mockedPosts: Post[] = [
  {
    id: randomString(),
    name: 'Felipe Oliveira',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageURL: 'https://picsum.photos/id/237/300/300',
  },
  {
    id: randomString(),
    name: 'Felipe Oliveira',
    message: 'This is my first post. ;)',
    imageURL: 'https://picsum.photos/id/1/300/300',
  },
  {
    id: randomString(),
    name: 'Felipe Oliveira',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ligula sed mauris luctus iaculis eu vitae odio. Nam vitae nunc a elit suscipit consectetur. Quisque et mollis velit. Quisque malesuada sagittis pharetra. Mauris eget posuere nulla. Proin mollis enim nec arcu viverra, et bibendum est ornare. Integer volutpat nisl a ullamcorper fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc dapibus sem odio, ut malesuada purus gravida eu. Vivamus ullamcorper bibendum arcu vel sollicitudin.',
    imageURL: 'https://picsum.photos/id/10/300/300',
  },
  {
    id: randomString(),
    name: 'Felipe Oliveira',
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    imageURL: 'https://picsum.photos/id/11/300/300',
  },
  {
    id: randomString(),
    name: 'Felipe Oliveira',
    message:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    imageURL: 'https://picsum.photos/id/17/300/300',
  },
  {
    id: randomString(),
    name: 'Felipe Oliveira',
    message: 'Access my portfolio!! https://d1szikd9uvunff.cloudfront.net',
    imageURL: 'https://picsum.photos/id/20/300/300',
  },
  {
    id: randomString(),
    name: 'Felipe Oliveira',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageURL: 'https://picsum.photos/id/22/300/300',
  },
  {
    id: randomString(),
    name: 'Felipe Oliveira',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageURL: 'https://picsum.photos/id/26/300/300',
  },
];
