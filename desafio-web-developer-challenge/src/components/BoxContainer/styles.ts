import styled from "styled-components";

export const Container = styled.div`
  width: 30.563rem;
  padding: 0.75rem 0.75rem 2rem 1.5rem;
  margin-top: 2rem;
  position: relative;
  background: ${(props) => props.theme["--gray-900"]};

  border: solid 1px ${(props) => props.theme["--gray-200"]};
  border-radius: 3px;
`;