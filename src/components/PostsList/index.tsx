import styled from "styled-components";

export const PostsList = styled.div`
  width: 100%;
  flex: 1;
  transition: all .5s;

  & > * {
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-bottom: 0px;
  }
`;
