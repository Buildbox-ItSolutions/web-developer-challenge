import Header from '@/components/Header';
import Container from '@/components/Container';
import Center from '@/components/Center';

function App() {
  return (
    <Container>
      <Header />
      <Center as="main" direction="column">
        <div>
          <div>logo</div>
          <input type="text" placeholder="Digite seu nome" />
          <textarea placeholder="Mensagem" />
        </div>
        <div>
          <ul>
            <li>
              <div>
                <div>header</div>
                <div>
                  <p>Content</p>
                  <p>Enviado por</p>
                  <p>Igor Wessel</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Center>
    </Container>
  );
}

export default App;
