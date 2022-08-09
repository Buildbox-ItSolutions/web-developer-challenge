import Posts from "components/Posts";
import styled  from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 516px;
`;
const Text = styled.h1`
    color:white;
    margin-left:-35vw;
    margin-top:56px;
`;

export default function Feed() {
    return (
        <Content>
            <Text>Feed </Text>
            <Posts />
        </Content>
    );
}