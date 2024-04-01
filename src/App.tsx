import { useState } from "react";
import { GlobalStyled } from "./GlobalStyled";
import Header from "./components/header/Header";
import List from "./components/list";
import Register from "./components/register/Register";

import { IRegister } from "./interfaces/Register";

function App() {
  const [registerList, setRegisterList] = useState<IRegister[]>([]);

  const deleteRegister = (id: number) => {
    setRegisterList(
      registerList.filter((register) => {
        return register.id !== id;
      })
    );
  };

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
      <List registerList={registerList} handleDelete={deleteRegister} />
    </>
  );
}

export default App;
