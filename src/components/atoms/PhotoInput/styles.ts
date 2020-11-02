import styled from 'styled-components';
import { shade } from 'polished';

export const StyledPhotoInput = styled.div`
  background-color: ${props => props.theme.colors.card};

  width: 88px;
  height: 88px;

  padding: 1rem;

  border: solid 1px ${props => props.theme.colors.input};
  border-radius: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  input[type='file'] {
    display: none;
  }

  label > img {
    width: 88px;
    height: 88px;

    border-radius: 36px;
  }

  label > .icon {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background: ${props => shade(0.1, props.theme.colors.card)};
    transition: 0.5s;
    cursor: pointer;
  }
`;
