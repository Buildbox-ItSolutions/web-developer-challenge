import { AppContainer, AppMain } from "./App.styles";
import FeedForm from "./components/FeedForm/FeedForm";
import FeedList from "./components/FeedList/FeedList";
import Header from "./components/Header/Header";

function App() {
  return (
    <AppContainer>
      <Header />

      <AppMain>
        <FeedForm />
        <FeedList />
      </AppMain>
    </AppContainer>
  );
}

export default App;
