import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(88vh - 2px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
    background: transparent;
    width: 0;
  }
`;

export { Container };
