import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 720px;
  border-radius: ${(props) => props.theme.card.borderRadius};
  border: ${(props) => props.theme.card.border};

  padding: ${(props) => props.theme.card.padding};
  margin: ${(props) => props.theme.card.margin};
  background: ${(props) => props.theme.color.bgCards};

  @media (max-width: 576px) {
    width: 90%;
  }
`;



export const Input = styled.input`
  padding: ${(props) => props.theme.inputs.padding};
  margin: 8px 24px;
  outline: 0;
  border: ${(props) => props.theme.inputs.border};
  background: ${(props) => props.theme.color.bgInputs};
  color: ${props => props.theme.color.textColor};
  border-radius: ${(props) => props.theme.inputs.borderRadius};
  font-size: 14px;
  width: 100%;
  font-family: "Roboto";
  resize: none;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  color: white;
  gap: 24px;
  margin-top: 24px;
`;

export const Button = styled.button`
  border: none;
  overflow: hidden;
  outline: none;
  font-size: 14px;
  padding: ${(props) => props.theme.button.padding};
  border-radius: ${(props) => props.theme.button.borderRadius};

  &.discard {
    text-decoration: underline;
    color: ${props=>props.theme.color.labelColor};
    background: transparent;
  }

  &.publish {
    cursor: pointer;
    background-color: ${(props) =>
      props.disabled
        ? props.theme.button.disabled
        : props.theme.button.actived};
    color: ${(props) => (props.disabled ? props.theme.color.bgCards : "#fff")};
  }
`;
