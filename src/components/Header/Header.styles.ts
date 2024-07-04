import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 104px;
  background-color: #242424;
  position: fixed;
  z-index: 9;
  top: 0;
`;
export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const Title = styled.h2`
  color: #53b950;
  margin: 0;
  font-weight: 900;
`;

export const SubTitle = styled.span`
  font-size: 12px;
  color: buttonface;
  text-transform: uppercase;
`;
