import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  padding: 20px 15px 0px 10px;
`;

export const Text = styled.div`
  color: ${(props) => props.theme.colors.text.grayLighter};
  line-height: 1.25;
`;

export const Label = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.text.gray};
  font-size: ${(props) => props.theme.font.smaller};
  padding: 24px 0 5px;
`;

export const Name = styled.div`
  color: ${(props) => props.theme.colors.text.grayLight};
  font-size: ${(props) => props.theme.font.small};
  padding-bottom: 5px;
`;

export const DeleteContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -20px;
  margin-right: -20px;
`;

