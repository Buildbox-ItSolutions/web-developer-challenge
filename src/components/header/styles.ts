import styled from 'styled-components';
import Logo from "../../assets/img/bx-logo.png";
import theme from '../../Theme';

export const Container = styled.header`
 height: 93px;
  background: ${theme.colors.header} url('${Logo}') no-repeat center;
`;



