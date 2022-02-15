import React, { SetStateAction } from "react";

import { FiImage } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { Container, Title } from "./styles";

interface Input {
  name: string;
  text: string;
  imgUrl: never[];
}

interface HeaderProps {
  userInput: Input[];
  setUserInput: React.Dispatch<SetStateAction<Input[]>>;
}

export function Feed({ userInput, setUserInput }: HeaderProps) {
  function removeItem(item: Input) {
    setUserInput(userInput.filter((input) => input !== item));
  }

  return (
    <>
      <Title>Feed</Title>

      {userInput.map((value) => (
        <Container key={value.name}>
          <div className="close-button-container">
            <AiOutlineCloseCircle onClick={() => removeItem(value)} />
          </div>

          <div className="content-wrapper">
            <div className="image-container">
              {value.imgUrl.length === 1 ? (
                <img src={value.imgUrl[0]["data_url"]} alt="" />
              ) : (
                <FiImage />
              )}
            </div>

            <div className="text-section">
              <p>{value.text}</p>

              <div className="send-by">
                <span>Enviado por</span>
                <span>{value.name}</span>
              </div>
            </div>
          </div>
        </Container>
      ))}
    </>
  );
}
