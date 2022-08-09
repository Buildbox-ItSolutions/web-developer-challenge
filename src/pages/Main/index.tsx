import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PostMake from 'components/PostMake';
import Feed from 'components/Feed';

const MainStyled = styled.main`
    height: 1540px;
    max-height:100%;
    background-color:#343434;
    @media screen and (max-width: 768px){
		width:100vw;
	}
`;
const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    max-height:100%;
    max-width:100vw;
    @media screen and (max-width: 768px){
		width:100vw;
	}  
`;

export default function Main() {
    return(
        <MainStyled>
            <Conteudo>
                <Header />
                <PostMake/>
                <Feed/>
                <Footer/>
            </Conteudo>
        </MainStyled>
    );
}