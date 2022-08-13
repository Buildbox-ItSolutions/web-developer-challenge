import { PostContext } from 'common/context/Post';
import { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import style from './Feed.module.scss';
import Post from './Post';

function Feed() {
  const { posts } = useContext(PostContext);
  const postDefault = {
    id: '',
    image: null,
    message: 'Mensagem',
    author: 'Autor',
  };
  return (
    <div className={style.feed}>
      <h2>Feed</h2>
      <TransitionGroup>
        {posts.map((item) => (
          <CSSTransition
            key={item.id}
            timeout={1000}
            classNames="fade"
            in={true}
          >
            <Post {...item} />
          </CSSTransition>
        ))}
        {!posts.length && (
          <CSSTransition timeout={1000} classNames="fade" in={true}>
            <Post {...postDefault} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default Feed;
