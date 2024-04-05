import styled from 'styled-components';

import { UploadImage } from '../../common/UploadImage';

export const Form = styled.form`
  .inputs-group {
    .input + .input {
      margin-top: 0.8rem;
    }
  }
`;

export const UploadImageStyled = styled(UploadImage)`
  margin-inline: auto;
  margin-bottom: 1.6rem;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2.4rem;

  margin-top: 3.2rem;
`;
