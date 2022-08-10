import styled from "styled-components";

export const Content = styled.section`
   max-width: 516px;
   margin: 0 auto;
   padding: 41px 0;
`;

export const FeedTitle = styled.h5`
  color: ${(props) => props.theme.colors.text.grayLight};
  font-size: ${(props) => props.theme.font.small};
  margin: 0;
  padding: 50px 0 5px;
`;

export const Feed = styled.div`
  display: grid;
  row-gap: 10px;
`;
