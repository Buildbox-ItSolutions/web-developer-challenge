import styled, { keyframes, css } from 'styled-components';
import { BsXCircle } from 'react-icons/bs';

interface TextProps {
    size?: 'small' | 'medium' | 'large';
    color?: string;
  }
  
const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;
  
const fadeOut = keyframes`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
`;
  
const CardContainer = styled.div<{ isVisible: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    background-color: #313131;
    margin-bottom: 16px;
    width: 400px;
    border-radius: 8px;
    border: 0.5px solid #3b3b3b;
    animation: ${(props) =>
      props.isVisible
        ? css`
            ${fadeIn} 0.3s ease-in-out forwards
          `
        : css`
            ${fadeOut} 0.3s ease-in-out forwards
          `};
  
    @media (max-width: 768px) {
      max-width: 80%;
      align-self: center;
    }
`;
  
const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    width: 100%;
  
    @media (max-width: 450px) {
      max-width: 80%;
      flex-direction: column;
    }
`;
  
const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
  `;
  
const TextContainer = styled.div`
    flex: 1;
    margin-top: 12px;
    padding-left: 12px;
`;
  
const TextStyled = styled.p<TextProps>`
    margin: 0;
    padding: 0;
    color: ${(props) => props.color || '#b5b5b5'};
    font-size: ${(props) => {
      switch (props.size) {
        case 'small':
          return '12px';
        case 'medium':
          return '16px';
        case 'large':
          return '20px';
        default:
          return '16px';
      }
    }};
`;
  
const CustomDeleteIcon = styled(BsXCircle)`
    color: #a54d27;
    cursor: pointer;
    font-size: 24px;
    align-self: flex-end;
    background-color: transparent;
`;

export {
    CardContainer,
    CardContent,
    Box,
    TextContainer,
    TextStyled,
    CustomDeleteIcon
}