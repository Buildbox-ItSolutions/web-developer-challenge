import P from 'prop-types';

import { useContext, useMemo } from 'react';

import { Context } from '../../contexts/homeContext';
import { Post } from '../post';

import './styles.css';

export const List = () => {
  const context = useContext(Context);

  return (
    <div className="list">
      {context.state.length >= 1 && <h4>Feed</h4>}
      {useMemo(() => {
        return context.state.map((post) => <Post key={post.id} post={post} />);
      }, [context.state])}
    </div>
  );
};

List.propTypes = {
  posts: P.shape({
    id: P.number.isRequired,
  }),
};
