import styled from 'styled-components';

import { Props } from '.';

export const InputStyled = styled.input`
  background-color: #494949;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  height: 40px;
  margin-bottom: ${(props: Props) => props.mb};
  margin-top: ${(props: Props) => props.mt};
  padding: 6px 16px;
  width: calc(100% - 32px);

  :focus-visible {
    outline: none;
  }

  ::placeholder {
    color: #9f9f9f;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.29;
  }
`;
