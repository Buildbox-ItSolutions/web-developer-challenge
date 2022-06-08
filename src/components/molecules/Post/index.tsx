import React from 'react';
import Avatar from 'components/atoms/Avatar';
import Card from 'components/atoms/Card';
import Typography from 'components/atoms/Typography';
import Icon from 'components/atoms/Icon';
import styled from 'styled-components';
import { ThemeSpacing } from 'styles/theme';

export type PostType = {
  id: string | number;
  image: string;
  description: string;
  name: string;
};

export interface PostProps {
  data: PostType;
  onDelete: () => void;
  marginBottom?: ThemeSpacing;
}

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${props => props.theme.spacing[7]};
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  word-break: break-word;
`;

const ImageContainer = styled.div`
  margin-right: ${props => props.theme.spacing[8]};
`;

function Post({ data, onDelete, marginBottom }: PostProps) {
  return (
    <Card marginBottom={marginBottom}>
      <CardHeader>
        <Icon name="FaTimesCircle" color="orange" onClick={onDelete} />
      </CardHeader>
      <CardBody>
        <ImageContainer>
          <Avatar
            src={data.image ?? '/avatar.png'}
            width="90px"
            height="90px"
          />
        </ImageContainer>
        <TextContainer>
          <Typography marginBottom="5" fontSize="lg" fontColor="gray_scale_8">
            {data.description}
          </Typography>

          <div>
            <Typography
              fontSize="sm"
              fontWeight="bold"
              fontColor="gray_scale_6"
            >
              Enviado por
            </Typography>
            <Typography fontColor="gray_scale_7">{data.name}</Typography>
          </div>
        </TextContainer>
      </CardBody>
    </Card>
  );
}

Post.defaultProps = {
  marginBottom: '0'
};

export default Post;
