import { colors } from '../../themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${colors.cardBackground};
  border: solid 1px ${colors.border};
  border-radius: 3px;
  padding: 24px;

  max-width: 468px;
`;
