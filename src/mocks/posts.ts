/* Utils */
import { generateIdentifier } from 'utils/identifier';

/* Types */
import { PostsProps } from 'types/posts';

/* Images */
import PostOne from '../assets/images/post-one.png';
import PostTwo from '../assets/images/post-two.png';
import PostEmpty from '../assets/images/post-empty.png';

export const posts: PostsProps[] = [
  {
    id: generateIdentifier(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
    author: 'Manuela Oliveira',
    image: PostOne,
  },
  {
    id: generateIdentifier(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis.',
    author: 'Manuela Oliveira',
    image: PostTwo,
  },
];

export const emptyPost = {
  id: '',
  description: '',
  author: '',
  image: PostEmpty,
};
