import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
`;

export const Caption = styled.p`
  color: #4b4b4b;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  margin-bottom: 8px;
  margin-top: 56px;
`;

export const Imagem = styled.img`
  border-radius: 33px;
  height: 88px;
  object-fit: cover;
  width: 88px;
`;

export const Message = styled.span`
  color: #9f9f9f;

  font-size: 16px;
  line-height: 1.25;
  width: 348px;
  word-break: break-all;
`;

export const SendBy = styled.span`
  color: #5f5f5f;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  margin-top: 24px;
`;

export const Name = styled.span`
  color: #7a7a7a;
  font-size: 14px;

  line-height: 1.29;
  margin-top: 2px;
  width: 348px;
  word-break: break-all;
`;

export const SectionPost = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #313131;
    border: 3px solid #343434;
    border-radius: 20px;
  }
`;

export const Signature = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 32px;

  @media (max-width: 578px) {
    margin-left: 0;
    margin-top: 18px;
  }
`;

export const Delete = styled.img`
  position: absolute;
  right: 12px;
  top: 12px;
`;
export const WrapperBody = styled.section`
  display: flex;
  margin-bottom: 8px;
  margin-top: 32px;

  @media (max-width: 578px) {
    align-items: center;

    flex-direction: column;
  }
`;
