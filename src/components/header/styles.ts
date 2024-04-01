import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #2b2b2b;
  display: grid;
  place-content: center;
  height: 93px;
  z-index: 10;

  img {
    height: 45px;
    width: 103px;
  }
`;
