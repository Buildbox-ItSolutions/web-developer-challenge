import styled from 'styled-components';

export const Container = styled.div<{
  hasImage?: boolean;
}>`
  border: 1px solid #4b4b4b;
  padding: ${(props) => (props.hasImage ? '0' : '32px')};
  border-radius: 36px;
  margin-bottom: 16px;
  cursor: pointer;
  overflow: hidden;
`;

export const Image = styled.img<{
  hasImage?: boolean;
}>`
  width: ${(props) => (props.hasImage ? '88px' : '24px')};
  height: ${(props) => (props.hasImage ? '88px' : '24px')};
`;
