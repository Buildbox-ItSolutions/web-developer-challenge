import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/header";
import Version1Page from "./pages/version1";

import * as S from "./styles";

function Layout() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Version1Page />} />
          <Route path="/version1" element={<Version1Page />} />
        </Routes>
      </Router>
    </>
  );
}
function App() {
  return (
    <>
      <S.GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
