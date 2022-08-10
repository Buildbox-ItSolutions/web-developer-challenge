import Posts from "components/Posts";
import styled  from "styled-components";
import { Dispatch, SetStateAction } from "react";
import { InPost } from "pages/Main";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 516px;
`;
const Text = styled.h1`
    color:white;
    margin-left:-26vw;
    margin-top:56px;
    margin-bottom: -20px;
`;

export default function Feed() {
    return (
        <Content>
            <Text>Feed </Text>
            <Posts />
        </Content>
    );
}