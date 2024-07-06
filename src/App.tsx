import { Form } from "./components/Form/index";
import { Post } from "./components/PostCard/index";
import { Header } from "./components/Header/index";
import * as S from "./styles";
import useFeed from "./hooks/useFeed";

export default function App() {
    const { posts } = useFeed();

    return (
        <S.Container>
            <Header />

            <S.Body>
                <Form />
                <S.FeedTitle>Feed</S.FeedTitle>
                {posts.length === 0 ? (
                    <S.NullFeed>Não há feeds no momento.</S.NullFeed>
                ) : (
                    posts.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            name={post.name}
                            imageURL={post.imageURL}
                            message={post.message}
                        />
                    ))
                )}
            </S.Body>
        </S.Container>
    );
}
