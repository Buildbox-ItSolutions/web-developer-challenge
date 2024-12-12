import { FC, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Card from '../Card';
import Publisher from '../Publisher';
import { Feed, Main } from './styles';

interface Post {
    author: string;
    profilePic: string;
    message: string;
    id?: string;
}

export interface submitProps {
    author: string;
    profilePic: string;
    message: string;
    e: FormEvent<HTMLFormElement>;
}

const MainComponent: FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const handleSubmit = (props: submitProps) => {
        props.e.preventDefault();
        const id = uuidv4();

        setPosts((prev) => [
            ...prev,
            {
                author: props.author,
                message: props.message,
                profilePic: props.profilePic || '/default-profile.png',
                id
            }
        ]);
    };

    const hendleDelete = (id: string) => {
        const updatedPosts = posts.filter((post) => post.id !== id);

        setPosts(updatedPosts);
    };
    return (
        <Main>
            <Publisher handleSubmit={handleSubmit} data-test="publisher-component" />
            <Feed>Feed</Feed>

            {posts &&
                posts.map((post) => (
                    <Card
                        hendleDelete={hendleDelete}
                        key={post.id}
                        profilePic={post.profilePic}
                        autor={post.author}
                        message={post.message}
                        id={post.id}
                    />
                ))}
        </Main>
    );
};

export default MainComponent;
