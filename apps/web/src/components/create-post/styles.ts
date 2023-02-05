import styled from 'styled-components';

import { BixCard } from '@bix/core';

export const CreatePostStyled = styled(BixCard)`
  width: 90%;
  max-width: 516px;
  height: 353px;
  margin: auto;
  padding: 24px;
  border-radius: 3px;

  margin-top: 42px;

  &,
  > div:nth-child(1),
  > div:last-child {
    display: flex;
    flex-direction: column;
  }

  > div:nth-child(1) {
    gap: 8px;
  }

  > div:last-child {
    margin-top: 32px;
  }
`;
