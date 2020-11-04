import styled from "styled-components";

export const AppHome = styled.section`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FeedHeader = styled.div`
  width: 600px;
  padding-top: 80px;
  padding-bottom: 20px;
  text-align: start;

  @media (max-width: 650px) {
    width: 90%;
  }

  p {
    size: 14px;
    color: #7a7a7a;
    font-weight: 500;

  }
`;
