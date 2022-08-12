import styled from 'styled-components'

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;
  padding: 0 1rem;
  width: 100%;
  height: 100%;

  .titleArea {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 516px;
    margin-bottom: 8px;

    .title {
      color: var(--gray-100);
      font-size: 14px;
    }
  }

  .noContent {
    margin: 2rem 0;
    color: var(--gray-200);
    font-size: 14px;
  }
`
