import styled from "styled-components";

export const FormContainer = styled.form`
  width: 514px;
  height: 351px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray.light};
  background-color: ${(props) => props.theme.colors.gray.main};
  padding: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.gray.lighter};
  }

  @media (max-width: 550px) {
    width: 90%;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
