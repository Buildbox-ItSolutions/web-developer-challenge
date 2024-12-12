import { usePostContext } from "../../contexts/postContext";
import Post from "./conponents/post";
import { FeedContainer, FeedSpan } from "./styles";

export default function Feed() {
    const {posts} = usePostContext()

    return <div>
        <FeedSpan>Feed</FeedSpan>
        <FeedContainer>
            {
                posts.map(post => <Post key={post.id} {...post} />)
            }
        </FeedContainer>
    </div>
}