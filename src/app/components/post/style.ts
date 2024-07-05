import styled from "styled-components";

export const PostContainer = styled.article`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.colors.gray.main};
  border: 1px solid ${(props) => props.theme.colors.gray.light};
  border-radius: 4px;
  padding: 40px 23px 23px 23px;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.gray.lighter};
  }

  & div:nth-child(2) {
    padding: 0 0 0 34px;
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.gray.lightest};
  }

  & p:nth-child(1) {
    margin-bottom: 30px;
  }
`;

export const Message = styled.p`
  color: ${(props) => props.theme.colors.gray.lightest};
`;

export const SendBy = styled.span`
  color: ${(props) => props.theme.colors.gray.lightest};
  opacity: 0.6;
  font-size: 12px;
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;
