import styled from "styled-components";

const Container = styled.div `
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageCollector = styled.div `
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  
`;

const InputLabel = styled.label`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`

const ImageInput = styled.input `
  width: 88px;
  height: 88px;
  border-radius: 36px;
  position: absolute;
  display: none;
`;

const ImageCollected = styled.img `
  max-width: 88px;
  max-height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.hasImage ? "36px" : "none"};
`;

export {
  Container,
  ImageCollector,
  InputLabel,
  ImageInput,
  ImageCollected
};