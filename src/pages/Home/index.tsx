import Feed from '../../components/Feed';
import Header from '../../components/Header';
import ShareBox from '../../components/ShareBox';
import { Content, PageContainer } from './styles';

const Home = () => {
    return (
        <PageContainer>
            <Header />
            <Content>
                <ShareBox />
                <Feed />
            </Content>
        </PageContainer>
    );
};

export default Home;
