import styled from "styled-components";

export const AvatarInputContainer = styled.div`
  width: 88px;
  height: 88px;
  position: relative;

  & label {
    cursor: pointer;
    display: block;

    border: 1px solid ${({ theme }) => theme.colors.gray[500]};
    border-radius: 36px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .avatar {
    width: 88px;
    height: 88px;
    object-fit: cover;
    border-radius: 36px;
  }

  .picture-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin: 2rem;
  }

  & input {
    display: none;
    inset: 0;
    z-index: 1;
    background-color: red;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
