import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  padding-left: 24px;
  padding-bottom: 32px;

  width: 100%;
  border-radius: 3px;
  margin: auto;
  margin-top: 16px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-direction: column;
  @keyframes slideFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: 1s ease-out 0s 1 slideFromTop;
`;

export const ImageContainer = styled.img`
  width: 20vw;
  object-fit: contain;
  border-radius: calc(20vw / 3);
  margin-right: 32px;
  align-self: flex-start;

  @media (min-width: 410px) {
    width: 15vw;
    border-radius: calc(15vw / 3);
  }

  @media (min-width: 768px) {
    width: 8vw;
    border-radius: calc(8vw / 3);
  }
  @media (min-width: 992px) {
    width: 90px;
    border-radius: 30px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Message = styled.div`
  font-family: Roboto;
  word-break: break-all;
  line-break: auto;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
`;

export const Label = styled.div`
  margin-top: 24px;
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
export const Name = styled.div`
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

export const DeleteIcon = styled.img`
  margin-left: auto;
  margin-bottom: 24px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.2s ease-in-out;
`;
