import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

const stylesInput = css`
  padding: 12px 0 11px 16px ;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  background-color: ${theme.colors.grey300};
  resize: none;
`;

const stylesText = css`
  height: 17px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
`;

const stylesAlignConteiners = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Background = styled.div`
  ${stylesAlignConteiners}
  width: 516px;
  height: 353px;
  margin: 40px auto 56px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px ${theme.colors.grey500};
  background-color: ${theme.colors.grey700};
`;

export const Container = styled.div`
  position: relative;
  height: 5.5rem;
  margin: 0 auto 1rem;
`;

export const Image = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const ContainerInputs = styled.div`
  ${stylesAlignConteiners}
  max-width: 468px;
  align-items: flex-end;

  div {
    display: flex;
    flex-direction: row;
    color: ${theme.colors.grey200};
  }

  p {
    text-decoration: underline;
  }

  button {
    ${stylesText}
    width: 98px;
    height: 41px;
    background-color: ${theme.colors.grey200};
    margin-left: 24px;
    padding: 12px 24px;
    border-radius: 8px;
    border: none;
    text-align: center;
    color: ${theme.colors.grey700};
  }
`;

export const Input = styled.input`
  ${stylesText}
  ${stylesInput}
  width: 468px;
  min-height: 40px;
  margin-bottom: 8px;
`;

export const TextArea = styled.textarea`
  ${stylesText}
  ${stylesInput}
  width: 468px;
  height: 80px;
  margin-bottom: 32px;
`;