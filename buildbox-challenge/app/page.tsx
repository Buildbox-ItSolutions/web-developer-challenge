"use client"
import Header from "./components/header/header";
import Card from "./components/card/card";
import Form from "./components/form/form";;
import { Container, ContentForm, MainContainer } from "./pageStyled";
import { MyProvider } from "./context/ContextPost";
import Feed from "./components/feed/feed";

export default function Home() {

  return (
    <Container>
      <Header />
      <MainContainer>
        <MyProvider>
          <ContentForm>
            <Card>
              <Form />
            </Card>
          </ContentForm>
          <Feed />
        </MyProvider>
      </MainContainer>
    </Container>
  );
}
