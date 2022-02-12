import styled from 'styled-components';

type Props = {
  bg?: string;
};

export default styled.div<Props>`
  min-height: 100vh;
  background: ${({ bg, theme }) => bg ?? theme.black[400]};
`;
