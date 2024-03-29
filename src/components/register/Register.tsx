import React, { useState, ChangeEvent, FormEvent } from "react";
import { IRegister } from "../../../src/assets/interfaces/Register";
import Photo from "../photo/Photo";
import { ButtonsWrapper, FieldsWrapper, Wrapper } from "./styles";
import InputField from "../input/InputField";

interface Props {
  btnDiscard: string;
  btnPublic: string;
  registerList: IRegister[];
  setRegisterList?: React.Dispatch<React.SetStateAction<IRegister[]>>;
}
const Register = ({
  btnDiscard,
  btnPublic,
  registerList,
  setRegisterList,
}: Props) => {
  //const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>("Manuela Oliveira");
  const [message, setMessage] = useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus."
  );

  const addRegisterHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && name.length > 0 && message && message.length > 0) {
      const id = Math.floor(Math.random() * 100);

      const newRegister: IRegister = { id, name, message };

      setRegisterList!([...registerList, newRegister]);

      setName("");
      setMessage("");
    }

    console.log(registerList);
  };

  const resetRegisterHandler = () => {
    setName("");
    setMessage("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setMessage(e.target.value);
    }
    console.log(registerList);
  };

  return (
    <form onSubmit={addRegisterHandler} onReset={resetRegisterHandler}>
      <Wrapper>
        <div>
          <Photo />
          <FieldsWrapper>
            <InputField
              type="text"
              name="name"
              value={name}
              placeholder="Nome"
              onChange={handleChange}
            />
            <InputField
              type="textarea"
              name="message"
              value={message}
              placeholder="Mensagem"
              onChange={handleChange}
            />
          </FieldsWrapper>
          <ButtonsWrapper>
            <button type="reset">{btnDiscard}</button>
            <button type="submit">{btnPublic}</button>
          </ButtonsWrapper>
        </div>
      </Wrapper>
    </form>
  );
};

export default Register;
