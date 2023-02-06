import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '@/store';
import { CardPost } from '@/components/card-post/card-post';

import { FeedStyled } from './styles';
import { removePostAction } from '@/store/actions/posts.actions';

export const Feed: FC = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: AppState) => state);

  const onRemovePost = (id: number) => dispatch(removePostAction(id));

  return (
    <FeedStyled>
      {posts.length > 0 && <span>Feed</span>}

      <div>
        {posts.map(post => (
          <CardPost {...post} key={post.id} onRemove={() => onRemovePost(post.id)} />
        ))}
      </div>
    </FeedStyled>
  );
};
