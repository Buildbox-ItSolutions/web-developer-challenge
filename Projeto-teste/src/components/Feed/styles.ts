import styled from 'styled-components';

export const SubTitle = styled.span`
  width: 516px;
  height: 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #7a7a7a;
  margin-bottom: 10px;
`;

export const Container = styled.main`
  width: 516px;
  height: 225px;
  border-radius: 3px;
  border: 1px solid #3b3b3b;
  background-color: #313131;
  margin-bottom: 18px;
`;

export const IconDel = styled.div`
  width: 21px;
  height: 21px;
  text-align: end;
  width: 100%;
  margin-top: 12px;
  padding-right: 12px;
  color: #ee6723;

  :hover {
    cursor: pointer;
  }
`;

export const ContainerItens = styled.div`
  width: 515px;
  height: 189px;
  padding: 20px 24px 32px 24px;
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const UserImg = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  object-fit: cover;
`;

export const ContainerDescription = styled.div`
  text-align: left;
`;

export const Description = styled.p`
  overflow-y: auto;
  width: 348px;
  height: 80px;
  font-family: 16px;
  line-height: 1.25;
  color: #9f9f9f;
`;

export const GirdName = styled.div`
  margin-top: 24px;
`;

export const SpanSubtitle = styled.span`
  width: 66px;
  height: 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.29px;
  color: #5f5f5f;
`;

export const Name = styled.div`
  width: 348px;
  height: 17px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;
  text-align: left;
  color: #7a7a7a;
`;
