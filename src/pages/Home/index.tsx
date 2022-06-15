import React from 'react';

import { Container, FeedSpan, Header } from './styled';
import Logo from "../../assets/images/bx-logo.png";

import CreateAPost from '../../components/CreateAPost';
import Feed from '../../components/Feed';

const Home = () => {

    return (
        <>
            <Header>
                <img src={Logo} alt="Logo buildbox" />
            </Header>

            <Container>
                <CreateAPost />

                <FeedSpan>
                    Feed
                </FeedSpan>

                <Feed />

            </Container>
        </>
    );
}

export default Home;