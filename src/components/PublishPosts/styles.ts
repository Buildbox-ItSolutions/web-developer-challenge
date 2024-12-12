import styled from 'styled-components';

export const Content = styled.div`
  width: 516px;
  margin: 40px 0px 56px 0px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px var(--border);
  background-color: var(--primary);
`;

export const ImageContent = styled.div`
  width: 88px;
  height: 88px;
  margin: 0 8px 0px 190px;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Link = styled.a`
  width: 60px;
  height: 17px;
  margin: 12px 0px 12px 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  text-decoration: underline;
  color: #5f5f5f;
  cursor: pointer;
`;
