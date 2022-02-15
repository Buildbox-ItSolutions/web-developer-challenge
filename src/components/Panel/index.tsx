import React, { useState } from "react";
import { Feed } from "../Feed";
import { InputInfo } from "../InputInfo";
import { Container } from "./styles";

interface userInput {
  name: string;
  text: string;
  imgUrl: never[];
}

export function Panel() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [imgUrl, setImgUrl] = useState([]);

  const [userInput, setUserInput] = useState<userInput[]>([]);

  return (
    <Container>
      <InputInfo
        setName={setName}
        setText={setText}
        name={name}
        text={text}
        userInput={userInput}
        setUserInput={setUserInput}
        imgUrl={imgUrl}
        setImgUrl={setImgUrl}
      />
      <Feed userInput={userInput} setUserInput={setUserInput} />
    </Container>
  );
}
