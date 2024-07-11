import React from 'react';
import styled from 'styled-components';
import { BsXCircle } from 'react-icons/bs';
import { Post } from '../../App';
import { StyledImage } from '../image';

interface TextProps {
  size?: 'small' | 'medium' | 'large'; 
  color?: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: #313131;
  margin-bottom: 16px;
  width: 400px; 
  border-radius: 8px;
  border: 0.5px solid #3B3B3B;


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
  color: ${props => props.color || '#B5B5B5'};
  font-size: ${props => {
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
  color: #A54D27;
  cursor: pointer;
  font-size: 24px;
  align-self: flex-end;
  background-color: transparent;
`;

export default function Card({ post, onDelete }: { post: Post, onDelete: () => void }) {
  return (
    <CardContainer>
      <CustomDeleteIcon onClick={onDelete} />
      <CardContent>
        <StyledImage src={post.image} alt="Imagem" />
        <TextContainer>
          <Box>
            <TextStyled>{post.message}</TextStyled>
          </Box>
          <Box>
            <TextStyled size='small'>Enviado por:</TextStyled>
            <TextStyled size='medium'>{post.name}</TextStyled>
          </Box>
        </TextContainer>
      </CardContent>
    </CardContainer>
  );
};
