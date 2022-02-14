import {
  renderWithProviders,
  screen,
  waitFor,
} from '@/__tests__/utils';
import Feed from '@/components/Feed';
import type { Post } from '@/types';

const posts: Post[] = [];

const withPosts: Post[] = [
  {
    id: 'uuid_1',
    name: 'Igor',
    message: 'Beer is so good!',
    avatar: {
      0: new File(['🍺'], 'brew.png', { type: 'image/png' }),
      length: 1,
      item: jest.fn(),
    } as unknown as FileList,
  },
  {
    id: 'uuid_2',
    name: 'Thiago',
    message: 'Beer not is good!',
    avatar: {
      length: 0,
      item: jest.fn(),
    } as unknown as FileList,
  },
];

const handleRemovePost = jest.fn();

test('should render a empty feed', async () => {
  renderWithProviders(
    <Feed posts={posts} handleRemovePost={handleRemovePost} />,
  );

  const postsElements = screen.queryAllByRole('article');

  expect(postsElements).toHaveLength(0);
});

test('should render a feed with posts', async () => {
  renderWithProviders(
    <Feed posts={withPosts} handleRemovePost={handleRemovePost} />,
  );

  await waitFor(() => screen.queryAllByRole('article'));
  screen.debug();
  const postsElements = screen.queryAllByRole('article');

  expect(postsElements).toHaveLength(2);
});
