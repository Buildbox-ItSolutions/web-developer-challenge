import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;

  .feed-text {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text[300]};
    margin: 8px 0;
  }
`;
