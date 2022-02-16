import React from 'react';

import Feed from '.';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { fireEvent } from '@testing-library/dom';

global.URL.createObjectURL = jest.fn(() => 'localhost');

import img from '../../images/delete.png';
import { useFeedService } from '../../hooks/useFeedService';
import { Feed as FeedType } from '../../types/feed';

const feed = [
  {
    id: 1,
    name: 'Everton',
    photoUrl: 'http://www.rachegebran.com.br/wp-content/uploads/perfil.jpg',
    message:
      'Bacon ipsum dolor amet doner pancetta boudin, burgdoggen venison tri-tip shank. Jerky chicken chislic, buffalo landjaeger pork belly ball tip pork tail corned beef leberkas bresaola tenderloin pork chop. Pastrami turkey capicola bacon chicken ball tip. Jerky meatloaf biltong andouille. Strip steak t-bone doner pork, swine tail pork loin jowl.',
  },
  {
    id: 2,
    name: 'Alguém',
    photoUrl:
      'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg',
    message:
      'Burgdoggen salami leberkas sirloin kevin cow shank ham tail porchetta jowl tri-tip strip steak turkey. Buffalo pork chop tenderloin, landjaeger cow porchetta venison flank doner salami pig rump tri-tip.',
  },
];

jest.mock('../../hooks/useFeedService');

const defaultFeedServiceMock = {
  getFeed: () => Promise.resolve({ feed }),
  postFeed: (body: FeedType) => {
    return Promise.resolve([...feed, { ...body, id: 3 }]);
  },
  deleteFeed: (id: number | string = 0) => {
    return Promise.resolve(feed.filter((item) => item.id != id));
  },
};

describe('Feed component', () => {
  const file = {
    ...new File([img], 'oii.png', { type: 'image/png' }),
    type: 'image/png',
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(10)),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  const useFeedMocked = jest.mocked(useFeedService);

  it('Should start with two posts', async () => {
    useFeedMocked.mockReturnValue(defaultFeedServiceMock);
    const Component = () => <Feed />;

    await act(async () => {
      render(<Component />);
    });

    const posts = screen.getAllByTestId('post');
    expect(posts.length).toBe(2);
  });

  it('After creating post should show new post', async () => {
    useFeedMocked.mockReturnValue(defaultFeedServiceMock);
    const Component = () => <Feed />;

    const { rerender } = render(<Component />);

    const imageUpload = screen.getByTestId('image-upload');
    const nameInput = screen.getByTestId('name-input');
    const messageInput = screen.getByTestId('message-input');

    await act(async () => {
      fireEvent.change(imageUpload, {
        target: {
          files: [file],
        },
      });
    });

    await act(async () => {
      fireEvent.input(nameInput, { target: { value: 'Everton' } });
    });

    await act(async () => {
      fireEvent.input(messageInput, { target: { value: 'Alguma mensagem' } });
    });

    const submitButton = screen.getByTestId('submit-button');

    await act(async () => {
      fireEvent.click(submitButton);
    });
    await act(async () => {
      rerender(<Component />);
    });

    const posts = screen.getAllByTestId('post');
    expect(posts.length).toBe(3);
  });

  it('After creating post should show new post', async () => {
    useFeedMocked.mockReturnValue(defaultFeedServiceMock);
    const Component = () => <Feed />;

    const { rerender } = render(<Component />);

    await act(async () => {
      rerender(<Component />);
    });

    const deleteButtons = screen.getAllByTestId('delete-button');

    await act(async () => {
      fireEvent.click(deleteButtons[0]);
    });

    await act(async () => {
      rerender(<Component />);
    });

    const posts = screen.getAllByTestId('post');
    expect(posts.length).toBe(1);
  });
});
