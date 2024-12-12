import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #313131;
  color: #fff;
  padding: 0.5rem 1rem 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0 2rem;

  .toDelete {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #9f9f9f;
    font-size: 0.75rem;

    button {
      background-color: #313131;
      color: red;
      font-size: 1.1rem;
      padding: 0.25rem;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;

export const PostContent = styled.div`
  display: flex;
  gap: 1rem;

  picture {
    max-width: 5rem;
    max-height: 5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;

    img {
      min-width: 5rem;
      min-height: 5rem;
      object-fit: cover;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      color: #9f9f9f;
      margin: 0;
      white-space: pre-line;
    }

    div {
      display: flex;
      flex-direction: column;
      font-size: 0.7rem;
      color: #7a7a7a;

      span {
        font-size: 0.9rem;
      }
    }
  }
`;

export const DataPost = styled.div``;
