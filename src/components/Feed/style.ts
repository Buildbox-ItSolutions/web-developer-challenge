import styled from 'styled-components'

export const FeedContainer = styled.div`
  width: 100%;
  color: #7a7a7a;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-weight: 500;
    font-size: 0.875em;
  }

  @media (min-width: 516px) {
    width: 516px;
  }
`

export const FeedItem = styled.div`
  width: 100%;
  padding: 56px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 516px) {
    display: grid;
    justify-content: center;
    align-items: flex-start;
    grid-template-columns: 88px 1fr;
  }

  .deleteItem {
    font-size: 1.5em;
    color: #d65923;
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }
`

export const UserImage = styled.div`
  width: 88px;
  height: 88px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 36px;
  }
`

export const FeedItemContent = styled.div`
  display: flex;
  flex-direction: column;

  .userMessage {
    color: #9f9f9f;
    max-width: 300px;
  }
  
  .sendBy {
    margin-top: 24px;
    font-size: 0.75em;
    font-weight: 500;
    color: #5f5f5f;
  }

  .userName {
    font-size: #7a7a7a;
    font-size: 0.875em;
  }
`