import FeedProps from '../interface/feedProps';
import { v4 as uuidv4 } from 'uuid';

function Feed({ children }: FeedProps) {
  return (
    <div>
      <p>Feed</p>
      {children.map((post) => (
        <div
          key={uuidv4()}
          className="w-[516px] mt-[8px] mb-[16px] bg-mainColor-dark  border border-mainColor-lightGrey px-[24px]"
        >
          {post}
        </div>
      ))}
    </div>
  );
}

export default Feed;
