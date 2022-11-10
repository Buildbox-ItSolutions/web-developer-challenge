import styled from "styled-components";

export const PostsListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  ::before {
    content: "Feed";
    display: block;
    color: #7a7a7a;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }
`;
