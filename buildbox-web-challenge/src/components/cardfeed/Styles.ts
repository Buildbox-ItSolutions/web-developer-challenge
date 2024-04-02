import styled from "styled-components";

export const Container = styled.div`
  width: 516px;
  height: 225px;
  margin: 8px 425px 16px;
  padding: 32px 24px;
  padding-top: 56px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  color: #3b3b3b;
  display: flex;
  position: relative;
  gap: 32px;
`;
export const BotaoRemover = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 12px;
  object-fit: contain;
`;

export const ConteudoPost = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
`;

export const Foto = styled.img`
  width: 88px;
  height: 88px;
  object-fit: contain;
  border-radius: 36px;
`;

export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

export const TextoPost = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #9f9f9f;
`;

/* export const Container = styled.div`; */

export const PostInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: 0.29px;

`;

export const Autor = styled.span`
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