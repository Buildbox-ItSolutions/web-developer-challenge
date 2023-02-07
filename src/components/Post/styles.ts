import styled from 'styled-components';


export const Container = styled.div`
  width: 516px;
  height: 225px;
  margin: 8px 0;
  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: var(--black-two);

  display: flex;
  align-items: center;
  text-align: left;
  
`;

export const PhotoBase = styled.section`
  width: 88px;
  height: 88px;
  margin: 24px 32px 16px 0;
  object-fit: contain;
  border-radius: 36px;

  img {
    width: 100%;
    border-radius: 36px;
  }
`;

export const Content = styled.section`
  width: calc(100% - 140px);
  margin-top: 24px;
`;

export const Message = styled.span`
  width: 348px;
  height: 80px;
  font-family: Roboto;
  font-size: 16px;
  text-indent: none
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
`

export const NameGroup = styled.div`
  margin-top:20px;
`;

export const SentBy = styled.span`
  width: 66px;
  height: 14px;
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

export const Name = styled.span`
  width: 103px;
  height: 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
`;

export const DeleteButton = styled.img`
  top: -80px;
  left: 460px;
  position: relative;
  height: 20px;
  object-fit: contain;

  &:hover {
    cursor: pointer;
  }
`;