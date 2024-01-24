import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 720px;
  border-radius: ${(props) => props.theme.card.borderRadius};
  border: ${(props) => props.theme.card.border};

  padding: 24px;
  margin: ${(props) => props.theme.card.margin};
  background: ${(props) => props.theme.color.bgCards};

  @media (max-width: 576px) {
    width: 90%;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const AvatarLabel = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;

  svg {
    cursor: pointer;
    position: absolute;
    left: 100px;
  }
`;

export const AvatarWrapper = styled.img<{ $hasImage: boolean }>`
  border: ${({ theme, $hasImage }) => ($hasImage ? "none" : theme.card.border)};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.avatar.borderRadius};

  width: ${({ theme }) => theme.avatar.size};
  height: ${({ theme }) => theme.avatar.size};
  padding: ${({ $hasImage }) => ($hasImage ? "0" : "24px")};
`;

export const Input = styled.input`
  padding: ${(props) => props.theme.inputs.padding};
  margin: 8px 24px;
  outline: 0;
  border: ${(props) => props.theme.inputs.border};
  background: ${(props) => props.theme.color.bgInputs};
  color: ${(props) => props.theme.color.textColor};
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

  &.trash {
    position: absolute;
    left: 100px;
  }

  &.discard {
    text-decoration: underline;
    color: ${(props) => props.theme.color.labelColor};
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
