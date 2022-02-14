import {
  renderWithProviders,
  screen,
  waitForElementToBeRemoved,
} from '@/__tests__/utils';
import Feed from '@/components/Feed';
import type { Post } from '@/types';

const posts: Post[] = [];

const withPosts: Post[] = [
  {
    id: 'uuid_1',
    name: 'Igor',
    message: 'Beer is soo good!',
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

test("should render a feed with posts (one post have avatar, second don't have", async () => {
  renderWithProviders(
    <Feed posts={withPosts} handleRemovePost={handleRemovePost} />,
  );

  await waitForElementToBeRemoved(() =>
    screen.getByLabelText(/Igor/i),
  );

  expect(screen.getByText(/Igor/)).toHaveTextContent(
    withPosts[0].name,
  );

  expect(screen.getByText(/Beer is soo good/)).toHaveTextContent(
    withPosts[0].message,
  );

  expect(screen.getByRole('img')).toHaveAttribute(
    'src',
    expect.stringMatching(/data:image\/(jpg|jpeg|png);base64/i),
  );

  expect(screen.queryAllByRole('article')).toHaveLength(2);
});
