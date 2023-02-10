import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${props => props.theme["gray-900"]};
  padding: 2.4rem 0;
  margin-bottom: 4rem;
`;
