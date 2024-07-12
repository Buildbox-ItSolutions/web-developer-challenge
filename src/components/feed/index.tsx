import Post, { PostProps } from "../post"

export type FeedProps = {
    Posts: PostProps[]
}


export default function Feed(props: FeedProps) {
    function getPosts(postProps: PostProps[]) {
        const mapped = postProps.map((p) => {
            return Post(p);
        });
        return mapped.reverse();
    }

    return (
        <section id="feed">
            {getPosts(props.Posts)}
        </section>
    )
}