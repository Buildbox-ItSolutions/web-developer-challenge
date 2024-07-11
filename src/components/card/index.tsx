import React, { useState } from 'react';
import { Post } from '../../App';
import { Box, CardContainer, CardContent, CustomDeleteIcon, TextContainer, TextStyled } from './style';
import { StyledImage } from '../image/style';



const CardComponent = ({ post, onDelete }: { post: Post; onDelete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onDelete();
    }, 300); 
  };

  return (
    <CardContainer isVisible={isVisible}>
      <CustomDeleteIcon onClick={handleDelete} />
      <CardContent>
        <StyledImage src={post.image} alt="Imagem" />
        <TextContainer>
          <Box>
            <TextStyled>{post.message}</TextStyled>
          </Box>
          <Box>
            <TextStyled size="small">Enviado por:</TextStyled>
            <TextStyled size="medium">{post.name}</TextStyled>
          </Box>
        </TextContainer>
      </CardContent>
    </CardContainer>
  );
};

export default CardComponent;
