import React from 'react';

import { Container, FeedSpan, Header } from './styled';
import Logo from "../../assets/images/bx-logo.png";

import CreateAPost from '../../components/CreateAPost';
import Feed from '../../components/Feed';

import { useData } from '../../providers/Data';

const Home = () => {

    const { posts } = useData();

    return (
        <>
            <Header>
                <img src={Logo} alt="Logo buildbox" />
            </Header>

            <Container>
                <CreateAPost />

                {posts.length > 0 && (
                    <FeedSpan>
                        Feed
                    </FeedSpan>
                )}

                <Feed />

            </Container>
        </>
    );
}

export default Home;