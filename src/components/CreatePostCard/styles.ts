import styled from "styled-components";

export const AppCard = styled.section`
  width: 600px;
  height: 353px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  @media (max-width: 650px) {
    width: 90%;
  }
`;

export const AppCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 15px;
  }
`;

export const AppCardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppCardButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 5% 5% auto auto;
`;

export const RoundImage = styled.div`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 88px;
    max-height: 88px;
  }
  margin-top:10px;
  margin-bottom:10px;
`;
