import { FeedContainer } from "./style";
import FeedCard from "../FeedCard";
import { useProvider } from "../../providers/Provider";

interface IMessages {
  name: string;
  message: string;
  photo: string;
}
const Feed = () => {
  const { messages } = useProvider();
  return (
    <FeedContainer>
      <span className="feed">Feed</span>
      {messages
        .slice(0)
        .reverse()
        .map((item: IMessages) => (
          <FeedCard
            photo={item.photo}
            message={item.message}
            name={item.name}
          />
        ))}
    </FeedContainer>
  );
};
export default Feed;
