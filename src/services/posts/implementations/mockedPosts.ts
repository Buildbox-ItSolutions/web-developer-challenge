import { Post } from '../../../@types/Post';
import { randomString } from '../../../utils/randomString';

export const mockedPosts: Post[] = [
  {
    id: randomString(),
    name: 'Felipe Oliveira',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageURL: 'https://picsum.photos/id/237/200/300',
  },
];
