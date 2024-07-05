import styled from "styled-components";

export const ListContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 48px 0;
  gap: 16px;

  h1 {
    color: ${(props) => props.theme.colors.gray.lightest};
    font-size: 14px;
    font-weight: 400;
  }
`;
