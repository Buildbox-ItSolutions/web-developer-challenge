import styled from "styled-components";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const H3 = styled.h3`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: var(--warm-grey-two);
`;

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  min-height: 215px;
  padding: 1.5rem;
  border-radius: 0.1875rem;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  min-width: 516px;
`;

export const Image = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin: 24px;
`;

export const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;
  margin-top: 24px;
  max-width: 348px;
`;

export const Message = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: var(--warm-grey-three);
`;

export const SendBy = styled.p`
    font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: #5f5f5f;
`;

export const Name = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: var(--warm-grey-two);
`;