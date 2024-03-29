import FeedProps from '../interface/feedProps';
import { v4 as uuidv4 } from 'uuid';

function Feed({ children }: FeedProps) {
  return (
    <div>
      <p>Feed</p>
      {children.map((post) => (
        <div key={uuidv4()}>{post}</div>
      ))}
    </div>
  );
}

export default Feed;
