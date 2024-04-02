import { usePostContext } from "../../contexts/postContext";
import Post from "./conponents/post";
import { FeedContainer } from "./styles";

export default function Feed() {
    const {posts} = usePostContext()

    return <FeedContainer>
        {
            posts.map(post => <Post key={post.id} {...post} />)
        }
    </FeedContainer>
}