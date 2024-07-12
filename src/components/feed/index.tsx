import styled from "styled-components";
import Post, { PostProps } from "../post"

export type FeedProps = {
    Posts: PostProps[]
}

const FeedSection = styled.section`
    width: 40%;
    display: flex;
    flex-direction: column;
    
    align-items: center;

    h4 {
        align-self: start;
    }
`;

export default function Feed(props: FeedProps) {
    function getPosts(postProps: PostProps[]) {
        const mapped = postProps.map((p) => {
            return Post(p);
        });
        return mapped.reverse();
    }

    return (
        <FeedSection id="feed">
            <h4>Feed:</h4>
            {getPosts(props.Posts)}
        </FeedSection>
    )
}