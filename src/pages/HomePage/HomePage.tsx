import React from 'react';
import { Container }  from './styles';
import Header from '../../components/Header';
import PublishBox from '../../components/PublishBox';
import Feed from '../../components/Feed';

const HomePage:React.FC = () => {
    return (
        <Container>
            <Header />
            <PublishBox />
            <Feed />
        </Container>
    );
}

export default HomePage;