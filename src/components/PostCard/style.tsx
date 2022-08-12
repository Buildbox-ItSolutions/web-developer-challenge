import styled from 'styled-components'

export const PostCardContainer = styled.div`
  width: 100%;
  max-width: 516px;
  min-height: 225px;
  background-color: var(--black-50);
  border: 1px solid var(--border);
  border-radius: 3px;
  margin-bottom: 16px;

  .cardArea {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 24px;
    margin-top: 32px;

    .imagePost {
      border-radius: 36px;
    }

    .textArea {
      width: 185px;
      margin-left: 32px;

      .message {
        font-size: 16px;
        font-weight: normal;
        line-height: 1.25;
        color: var(--gray-50);
        margin-bottom: 24px;
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
      }

      @media (min-width: 720px) {
        width: 348px;
      }
    }
  }
`
