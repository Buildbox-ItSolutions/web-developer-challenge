import { colors } from './../../themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;

  height: 93px;

  background: ${colors.headerBg};

  position: sticky;
`;
