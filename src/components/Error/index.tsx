import styled, { CSSProperties } from 'styled-components';
import Text from '@/components/Text';

type Props = {
  alignSelf?: CSSProperties['alignSelf'];
};

const Error = styled(Text)<Props>`
  font-size: 12px;
  margin-bottom: 8px;
  align-self: ${({ alignSelf }) => alignSelf ?? 'flex-start'};
  color: ${({ theme }) => theme.error};
`;

export default Error;
