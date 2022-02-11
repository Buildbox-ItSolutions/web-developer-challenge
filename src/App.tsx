import Header from '@/components/Header';
import Container from '@/components/Container';
import Center from '@/components/Center';
import Form from '@/components/Form';
import Feed from '@/components/Feed';

function App() {
  return (
    <Container>
      <Header />
      <Center as="main" marginX="16px" direction="column">
        <Form />
        <Feed />
      </Center>
    </Container>
  );
}

export default App;
