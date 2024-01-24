import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.color.bgHeader};

  width: 100%;
  height: 100%;

  margin-bottom: ${(props) => props.theme.header.marginBottom};
  max-height: ${(props) => props.theme.header.maxHeight};
  padding: ${(props) => props.theme.header.padding};
`;

export const Image = styled.img`
padding: 24px 0;
`