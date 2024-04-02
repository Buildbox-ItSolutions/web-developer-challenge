import React, {useState, useEffect} from "react";
import styled from "styled-components";

import CardPubli from "../cardPubli/index.tsx";
import {Publication} from '../../global.ts';
import { getFeed, dell } from "../../globalList.ts";

const StyledContent = styled.div`
    margin: auto;
    width: 516px;
    height: 100%;
    margin-top: 56px;
`;

const StyledP = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7A7A7A;
    margin-bottom: 8px;
`;

export default function Feed(props: any) {
    const [Feed, setFeed] = useState<Publication[]>(getFeed());

    const geraPosts = () => {
        
        const list: JSX.Element[] = [];
        for(let i = 0; i < Feed.length; i++){
            const card = <CardPubli key={i} infos={Feed[i]} id={i} deleta={deleta}/>;
            list.push(card);
        }

        return list;
    };

    useEffect(()=>{
        if(props.change){
            setFeed(getFeed());
            props.setChange(false);
        }
    },[props.change])
    const deleta = (index: number) => {
        const newFeed = dell(index); 
        setFeed([...newFeed]); 
    }
    

    return (
        <StyledContent>
            <StyledP>Feed</StyledP>
            <section style={{width: '100%'}}>
                {geraPosts()}
            </section>
        </StyledContent>
    );
}