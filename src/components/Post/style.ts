import styled from "styled-components";

export const PostContainer = styled.div`
  position: relative;

  display: flex;
  /* align-items: center; */
  justify-content: center;
  gap: 3.2rem;

  width: 100%;
  background: var(--gray-700);
  border: 1px solid var(--gray-500);
  padding: 56px 24px 32px;

  img {
    width: 88px;
    height: 88px;
    border-radius: 36px;
    object-fit: cover;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  gap: 2.4rem;
`

export const Detail = styled.div`
  justify-self: flex-end;
  font-size: 1.8rem;

  span {
    font-size: 1.6rem;
    color: var(--gray-300);
  }
`
export const CloseButton = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  button {
    font-size: 2rem;
    color: #c75425;
    background: none;
  }
`
