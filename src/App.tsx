import Feed from "./components/Feed";
import Form from "./components/Form";
import Header from "./components/Header";
import Main from "./components/Main";
import Title from "./components/Title";
import Content from "./components/Content";

function App() {
    return (
        <Main>
            <Header>
                <Title title={"buildbox"} caption={"web challenge"} />
            </Header>

            <Content>
                <Form />
                <Feed />
            </Content>
        </Main>
    )
}

export default App
