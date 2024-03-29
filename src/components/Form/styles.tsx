import styled from "styled-components";
import theme from '../../styles/theme';

export const Background = styled.div`
  width: 516px;
  height: 353px;
  margin: 40px auto 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px ${theme.colors.grey500};
  background-color: ${theme.colors.grey700};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  position: relative;
  width: 5.5rem;
  height: 5.5rem;
  margin: 0 auto 1rem;
  object-fit: contain;
  border-radius: 2.25rem;
`;

export const Upload = styled.img`
  width: auto;
  height: auto;
  /* border: solid 1px ${theme.colors.grey400};
  background-color: ${theme.colors.grey300}; */
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; /* A segunda imagem fica abaixo da primeira */
`;

export const Box2 = styled.div`
  max-width: 468px;
  display: flex;
  justify-content: right;
`;
export const Input = styled.input`
  width: 468px;
  min-height: 40px;
  margin: 0 0 8px;
  padding: 12px 16px 11px;
  border-radius: 8px;
  border: none;
  background-color: ${theme.colors.grey300};
  box-sizing: border-box;

  height: 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
`;

export const TextArea = styled.textarea`
  width: 468px;
  height: 80px;
  margin: 8px 0 32px;
  padding: 12px 16px 11px;
  border-radius: 8px;
  border: none;
  background-color: ${theme.colors.grey300};
  box-sizing: border-box;
  resize: none;

  font-family: Roboto;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  background-color: ${theme.colors.grey200};
  border: none;

  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: ${theme.colors.grey700};
`;