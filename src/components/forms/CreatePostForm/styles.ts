import styled from 'styled-components';

import { UploadImage } from '../../UploadImage';

export const Form = styled.form`
  .inputs-group {
    .input + .input {
      margin-top: 0.8rem;
    }
  }
`;

export const UploadImageStyled = styled(UploadImage)`
  background-color: red;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2.4rem;

  margin-top: 3.2rem;
`;
