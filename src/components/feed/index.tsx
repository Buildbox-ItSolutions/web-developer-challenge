import Post, { PostProps } from "../post"

export type FeedProps = {
    Posts: PostProps[]
}


export default function Feed(props: FeedProps) {
    function getPosts(postProps: PostProps[]) {
        return postProps.map((p) => {
            return Post(p);
        });
    }

    return (
        <section id="feed">
            {getPosts(props.Posts)}
        </section>
    )
}