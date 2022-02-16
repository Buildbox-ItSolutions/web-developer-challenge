import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import { renderWithStore, screen } from '@/__tests__/utils';
import type { Post } from '@/reducers/posts';
import Feed from '@/components/Feed';

const withPosts: Post[] = [
  {
    id: 'uuid_1',
    name: 'Igor',
    message: 'Beer is soo good!',
    avatar: '',
  },
  {
    id: 'uuid_2',
    name: 'Thiago',
    message: 'Beer not is good!',
    avatar: 'data:image/jpeg;base64',
  },
  {
    id: 'uuid_3',
    name: 'Ana',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl dui, porta ac mattis in, iaculis at elit. Suspendisse ac tellus vel eros finibus tempor sit amet vel magna. Nullam venenatis tristique dolor nec feugiat. Suspendisse rhoncus dui purus, nec finibus nisi faucibus suscipit. Nunc vestibulum lobortis turpis, ac elementum lectus posuere in. Vivamus malesuada mattis volutpat. Integer varius, nulla vitae fermentum finibus, neque mi bibendum orci, ut maximus odio urna non urna. Nunc nulla nisi, vehicula at eros eget, semper commodo magna. Vivamus sodales purus ut nulla commodo tristique. Quisque orci metus, laoreet et sagittis ac, semper eget velit.',
    avatar: '',
  },
];

test('should render a empty feed', async () => {
  renderWithStore(<Feed />);

  const postsElements = screen.queryByRole('article');

  expect(postsElements).not.toBeInTheDocument();
});

test('should render a feed with posts', async () => {
  renderWithStore(<Feed />, { preloadedState: { posts: withPosts } });

  expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(/data:image\/(jpg|jpeg|png);base64/i));
  expect(screen.getByRole('button', { name: /...ler mais/i })).toBeInTheDocument();

  expect(screen.queryAllByRole('article')).toHaveLength(3);
});

test('should expand/collapse a post with show more link', async () => {
  renderWithStore(<Feed />, { preloadedState: { posts: withPosts } });

  const user = userEvent.setup();

  const buttonShowMore = screen.getByRole('button', { name: /\.\.\.ler mais/i });

  expect(buttonShowMore).toBeInTheDocument();

  await user.click(buttonShowMore);

  expect(screen.queryByRole('button', { name: /\.\.\.ler mais/i })).not.toBeInTheDocument();

  const buttonShowLess = screen.getByRole('button', { name: /mostrar menos/i });

  expect(buttonShowLess).toBeInTheDocument();

  await user.click(buttonShowLess);

  expect(screen.queryByRole('button', { name: /mostrar menos/i })).not.toBeInTheDocument();
});
