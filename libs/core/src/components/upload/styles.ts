import styled from 'styled-components';

export const UploadStyled = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;

  input {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    overflow: hidden;
    position: relative;

    img {
      &:first-child {
        width: 24px;
      }

      &:last-child {
        width: inherit;
        height: inherit;
        position: absolute;
        top: 0px;
        right: 0px;
        object-fit: cover;
        opacity: 0;
      }
    }

    &.upload img:last-child {
      opacity: 1;
    }
  }

  > img {
    position: absolute;
    left: calc(50% + 56px);
    top: 50%;
    cursor: pointer;

    transform: translateY(-50%);
  }
`;
