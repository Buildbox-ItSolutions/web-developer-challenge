import { useState } from "react";
import { GlobalStyled } from "./GlobalStyled";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Register from "./components/register/Register";

import { IRegister } from "./assets/interfaces/Register";

function App() {
  const [registerList, setRegisterList] = useState<IRegister[]>([]);
  return (
    <>
      <GlobalStyled />
      <Header />
      <Register
        btnDiscard="Descartar"
        btnPublic="Publicar"
        registerList={registerList}
        setRegisterList={setRegisterList}
      />
      <List registerList={registerList} />
    </>
  );
}

export default App;
