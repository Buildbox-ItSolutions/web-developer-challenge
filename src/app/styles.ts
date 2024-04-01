import styled, { css } from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.header};
`;

export const Body = styled.div`
  gap: 56px;
  flex: 1;
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 516px;
  overflow-y: auto;
  padding: 41px 16px 0;
  flex-direction: column;
`;

export const Form = styled.form`
  gap: 32px;
  padding: 24px;
  display: flex;
  border-radius: 3px;
  flex-direction: column;

  ${(props) => css`
    border: 1px solid ${props.theme.colors.black};
    background-color: ${props.theme.colors.black_two};
  `}

  & > * {
    display: flex;
    align-items: center;
  }

  & > :first-child {
    gap: 16px;
    flex-direction: column;
  }

  & > :last-child {
    gap: 14px;
    justify-content: flex-end;
  }
`;

export const FormGroup = styled.div`
  gap: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Feed = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
