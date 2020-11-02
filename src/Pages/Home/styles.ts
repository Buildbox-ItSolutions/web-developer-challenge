import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  background: #2b2b2b;
  height: 93px;
  width: 100%;
  position: fixed;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
type UpButtomType = {
  enabled: boolean;
};
export const UpButtom = styled.div<UpButtomType>`
  position: fixed;
  display: ${(props) => (props.enabled ? "flex" : "none")};
  bottom: 10px;
  right: 10px;
  background: #2b2b2b;
  border: 1px solid #6c6c6c;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;

  align-items: center;
  justify-content: center;
  animation: flickerAnimation linear 500ms;
  transition: right 200ms linear;

  @media (max-width: 630px) {
    width: 40px;
    height: 40px;
  }

  @keyframes flickerAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
