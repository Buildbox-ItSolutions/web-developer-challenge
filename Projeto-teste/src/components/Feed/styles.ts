import styled from 'styled-components';

export const SubTitle = styled.span`
  width: 516px;
  height: 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #7a7a7a;
  margin-top: 56px;
  margin-bottom: 8px;

  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const Container = styled.main`
  width: 516px;
  height: 225px;
  border-radius: 3px;
  border: 1px solid #3b3b3b;
  background-color: #313131;
  margin-bottom: 16px;

  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const IconDel = styled.div`
  width: 21px;
  height: 21px;
  font-size: 20px;
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

  @media (max-width: 800px) {
    width: 400px;
  }

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 24px;
`;

export const UserImg = styled.img`
  margin-left: 24px;
  margin-right: 32px;
  width: 88px;
  height: 88px;
  border-radius: 36px;
  object-fit: cover;

  @media (max-width: 800px) {
    width: 45px;
    width: 45px;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    width: 40px;
  }
`;

export const ContainerDescription = styled.div`
  margin-right: 24px;
  text-align: left;
`;

export const Description = styled.p`
  overflow-y: auto;
  width: 348px;
  height: 80px;
  font-family: 16px;
  line-height: 1.25;
  color: #9f9f9f;

  @media (max-width: 800px) {
    width: 260px;
    font-size: 14px;
  }

  @media (max-width: 600px) {
    width: 180px;
  }
`;

export const GirdName = styled.div`
  margin-top: 24px;
`;

export const SpanSubtitle = styled.span`
  width: 66px;
  height: 14px;
  margin-bottom: 2px;
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

  @media (max-width: 800px) {
    width: 260px;
  }

  @media (max-width: 600px) {
    width: 180px;
  }
`;
