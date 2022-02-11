import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageCollector = styled.div`
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
`;

const ImageCollected = styled.img`
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
`;

export { Container, ImageCollector, ImageCollected };
