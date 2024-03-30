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

export const FeedSpan = styled.span`
    width: 30px;
    height: 17px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
`

export const NotFoundPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #7a7a7a;
  

`