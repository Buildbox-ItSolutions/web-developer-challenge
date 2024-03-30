import { styled } from "styled-components"

export const FeedContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 516px;
  gap: 10px;

  
  @media (max-width: 729px) {
        justify-content: center;
        width: 416px;
        margin-right: 50px;
    }

  @media (max-width: 496px) {
        width: 316px;
  
    }
`