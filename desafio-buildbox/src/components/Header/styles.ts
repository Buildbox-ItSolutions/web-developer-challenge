import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #2b2b2b;
`;

export const Title = styled.h1`
  color: #71bb00;
  font-size: 24px;
`;

export const Subtitle = styled.p`
  color: #707070;
  font-size: 12px;
`;
