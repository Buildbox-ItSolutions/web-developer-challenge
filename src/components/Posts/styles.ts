import styled from 'styled-components';

export const Content = styled.div`
  width: 516px;
  margin: 8px 0px 16px 0px;
  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  border: solid 1px var(--border);
  background-color: var(--primary);
`;

export const Delete = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 88px;
  height: 88px;
  margin: 24px 0px 16px 0px;
  object-fit: contain;
  border-radius: 36px;
`;

export const Description = styled.p`
  width: 348px;
  margin: 24px 0px 24px 32px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
`;

export const Sent = styled.p`
  margin: 16px 0px 2px 32px;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: #5f5f5f;
`;

export const Author = styled.p`
  margin: 2px 0px 0px 32px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
`;
