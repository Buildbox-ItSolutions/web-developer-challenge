import styled from "styled-components";

export const IconButton = styled.button`
  background: none;
  justifycontent: center;
  aligncontent: center;
  display: flex;

  // extra-small
  @media (min-width: 0) {
    right: 50px;
  }

  // small
  @media (min-width: 600px) {
    right: 150px;
  }
`;
