import styled from "styled-components";

export const HeaderContent = styled.header`
  background: ${(props) => props.theme["--gray-900"]};
  height: 5.813rem;

  display: flex;
  justify-content: center;
  padding: 1.25rem 0;
`;