import { Header } from "./components/Header";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Header />
      <div className="post-container">
        <section>
          <Post />
        </section>
      </div>
    </>
  );
}

export default App;
