import styled from "styled-components";


export const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 45px 0;
  background: #343434;
  
  @media (max-width: 500px) {
    padding: 45px 10px;
  }
`

export const FeedContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 516px;
  gap: 15px;

  .title-feed {
    color: #7a7a7a;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`