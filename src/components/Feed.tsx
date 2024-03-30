import FeedProps from '../interface/feedProps';
import { v4 as uuidv4 } from 'uuid';

function Feed({ children }: FeedProps) {
  return (
    <div className="w-[516px]">
      <p>Feed</p>
      {children.length <= 0 ? (
        <p className="mt-[40px] text-mainColor-subtitle text-[30px]">Não existem postagens</p>
      ) : (
        <div>
          {children.map((post, index) => (
            <div key={uuidv4()} className={index === children.length ? 'entering' : ''}>
              {post}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;
