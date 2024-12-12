import { TextFeedPost } from "../../../../styles";
import usePublishPost from "../../hooks/usePublishPost";

export default function Feed() {
  const { posts } = usePublishPost();

  return <>{posts.length > 0 && <TextFeedPost>Feed</TextFeedPost>}</>;
}
