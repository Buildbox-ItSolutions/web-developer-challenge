import styled from 'styled-components';

export const Container = styled.section`
  background-color: #313131;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  display: flex;
  align-items: start;
  margin: 30px 0 10px 0;
  padding: 24px;
  width: 516px;

  @media (max-width: 672px) {
    width: 80%;
  }
`;

export const AvatarContainer = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: center;
  margin: 17px 0 0 11px;
  width: 80px;
  height: 80px;
`;

export const Avatar = styled.img`
  border: solid 1px #4b4b4b;
  width: 80px;
  height: 80px;
  border-radius: 33%;
`;

export const TextContainer = styled.div`
  border-radius: 36px;
  color: #fff;
  margin: 13px 29px 18px 28px;
  object-fit: contain;
  width: 70%;
`;

export const Message = styled.div`
  color: #9f9f9f;
  font-family: Roboto;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1.25;
  margin-bottom: 24px;
  text-align: left;
`;

export const Field = styled.div`
  color: #5f5f5f;
  font-family: Roboto;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.29px;
  line-height: 1.33;
  text-align: left;
`;

export const Name = styled.div`
  color: #7a7a7a;
  font-family: Roboto;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1.29;
  text-align: left;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const Close = styled.img`
  cursor: pointer;
`;
