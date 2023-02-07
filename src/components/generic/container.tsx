import styled from "styled-components";

type containerType = {
  margin?: string;
  padding?: string;
  width: string;
  height: string;
  vAlign?: string;
  hAlign?: string;
  border?: string;
  background?: string;
  position?:string;
  top?:string;
  left?:string;
};

export const Container = styled.div<containerType>`
  display: flex;
  position:${props=>props.position? props.position:"static"};
  top:${props=>props.top? props.top:"0"};
  left:${props=>props.left? props.left:"0"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => (props.margin ? props.margin : "none")};
  padding: ${(props) => (props.padding ? props.padding : "none")};
  align-items: ${(props) => (props.vAlign ? props.vAlign : "none")};
  justify-content: ${(props) => (props.hAlign ? props.hAlign : "none")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  border: ${(props) => (props.border ? `1px solid ${props.border}` : "none")};
`;
