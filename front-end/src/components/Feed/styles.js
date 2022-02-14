import styled from "styled-components";

const Container = styled.main`
  width: ${props => props.width < 560 ? `${props.width - 40}px` : "38vw"};
  min-width: ${props => props.width < 560 ? "0" : "516px"};
  height: max-content;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  position: relative;
`;

const FeedLabel = styled.span`
  text-align: start;
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #7a7a7a;
`;

export { Container, FeedLabel };
