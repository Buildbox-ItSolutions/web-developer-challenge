import styled from 'styled-components';
import { colors } from "../../theme";

export const InputPost = styled.div`
  width: 32.25rem;
  height: 22.063rem;
  background-color: ${colors.colorPost};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  border-radius: 0.2rem;

  @media (max-width: 600px) {  
    width: 90%;     
  }
`;

export const FirstInputComponent = styled.input`
  width: 85%;
  padding: 0.5rem;
  background-color: ${colors.colorInput};
  border-radius: 0.5rem;
  margin-bottom: 20px;
  color: ${colors.colorInside};
  font-family: Roboto;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${colors.inputFocus};
  }
`;

export const SecondInputComponent = styled.input`
  width: 85%;
  height: 80px;
  padding: 0.5rem;
  background-color: ${colors.colorInput};
  border-radius: 0.5rem;
  margin-bottom: 20px;
  color: ${colors.colorInside};
  font-family: Roboto;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${colors.inputFocus};
  }
`;

export const CardDiv = styled.div`
  display:flex;
  align-items: center;
  gap: 1.5rem
`;

export const CardDivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 89%;
  gap: 1rem;
`;

export const DivFeed = styled.div`
width: 32.25rem;
display: flex;

@media (max-width: 600px) {  
  width: 90%;  
`;

export const StyledH3 = styled.h3`
  font-size: 0.9rem; 
  color: ${colors.colorFeed};
  font-family: Roboto;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const PostIncluded = styled.div`
  width: 32.25rem;
  height: 14rem;
  background-color: ${colors.colorPost};
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
  border-radius: 0.2rem;
`;

export const DivInformation= styled.div`
display: flex;
flex-direction:column;
`;

export const DivIcon = styled.div`
width: 95%;
height: 1rem;
display: flex;
justify-content: flex-end;
`;

export const DivImage = styled.div`
  margin-bottom: 2rem;
  display: flex;
`;