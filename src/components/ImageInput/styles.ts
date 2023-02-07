import styled from 'styled-components';
import { shade } from 'polished';

export const StyledImageInput = styled.div`
  background-color: ${props => props.theme.colors.card};
  width: 88px;
  height: 88px;
  border: solid 1px ${props => props.theme.colors.input};
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  input[type='file'] {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 36px;

    > img {
      width: 88px;
      height: 88px;
    }

    > img.user-image {
      border-radius: 36px;
    }

    > .icon {
      width: 24px;
      height: 24px;
    }
  }

  label 

  &:hover {
    background: ${props => shade(0.1, props.theme.colors.card)};
    transition: 0.5s;
  }
`;