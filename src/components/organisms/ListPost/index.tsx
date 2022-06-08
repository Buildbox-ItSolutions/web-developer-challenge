import React from 'react';

import Post, { PostType } from 'components/molecules/Post';
import Typography from 'components/atoms/Typography';
import styled from 'styled-components';

export interface PostProps {
  data?: PostType[];
  onDeletePost: (post: PostType) => void;
}

const TitleContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing[4]};
`;

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function ListPost({ data, onDeletePost }: PostProps) {
  return (
    <div>
      <TitleContainer>
        <Typography fontColor="gray_scale_7" fontWeight="bold">
          Feed
        </Typography>
      </TitleContainer>
      {data.length === 0 ? (
        <EmptyContainer>
          <Typography fontColor="gray_scale_7" fontWeight="regular">
            Não há posts a serem exibidos.
          </Typography>
        </EmptyContainer>
      ) : (
        data.map(post => (
          <Post
            key={post.id}
            data={post}
            onDelete={() => onDeletePost(post)}
            marginBottom="6"
          />
        ))
      )}
    </div>
  );
}

ListPost.defaultProps = {
  data: []
};

export default ListPost;
