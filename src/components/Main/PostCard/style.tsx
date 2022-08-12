import styled, { keyframes } from 'styled-components'

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const PostCardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 516px;
  min-height: 200px;
  background-color: var(--black-50);
  border: 1px solid var(--border);
  border-radius: 3px;
  margin-bottom: 16px;

  animation: ${show} 0.7s linear;

  .closeButtonArea {
    position: absolute;
    top: 12px;
    right: 12px;

    cursor: pointer;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.8);
    }
  }

  .cardArea {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 24px;
    margin-top: 32px;

    .imagePost {
      object-fit: cover;
      border-radius: 36px;
    }

    .textArea {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 185px;
      margin-left: 32px;

      .message {
        font-size: 16px;
        font-weight: normal;
        line-height: 1.25;
        color: var(--gray-50);
        margin-bottom: 24px;
        word-break: break-word;
      }

      h6 {
        font-size: 12px;
        font-weight: normal;
        line-height: 1.33;
        color: var(--gray-200);
      }

      .name {
        font-size: 14px;
        font-weight: normal;
        line-height: 1.29;
        color: var(--gray-100);
        word-break: break-word;
      }

      @media (min-width: 720px) {
        width: 348px;
      }
    }
  }
`
