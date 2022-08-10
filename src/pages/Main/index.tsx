import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PostMake from 'components/PostMake';
import Feed from 'components/Feed';
import React, { useState } from 'react';

const MainStyled = styled.main`
    height: 1540px;
    max-height:100%;
    background-color:#343434;
    max-width:100%;
    width:100vw;
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
    max-width:100%;
    width:100vw;
    @media screen and (max-width: 768px){
		width:80vw;
	}  
`;

export interface InPost {
    id?: string;
    photo: string;
    name: string;
    message: string;
  }

export default function Main() {
    const [posts, setPosts] = useState<InPost[]>([]);
    return(
        <MainStyled>
            <Conteudo>
                <Header />
                <PostMake data={{posts,setPosts}}/>
                <Feed/>
                <Footer/>
            </Conteudo>
        </MainStyled>
    );
}