import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: scroll;
  width: 100%;
  padding: 40px 24px 170px 24px;

  & > * {
    width: 100%;
    max-width: 516px;
  }
`;
