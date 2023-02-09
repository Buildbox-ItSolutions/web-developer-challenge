import styled from "styled-components";
import { IPostForm } from "../../pages/Feed/Feed.interface";
import FeedCard from "../FeedCard";

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeedContainer = ({
  postList,
  handleRemovePost,
}: {
  postList: IPostForm[];
  handleRemovePost: (id: number) => void;
}) => {
  return (
    <FeedWrapper>
      {postList.map((post) => {
        return (
          <FeedCard
            onDelete={() => handleRemovePost(post.id)}
            key={post.id}
            name={post.name}
            message={post.message}
            photo={post.photo}
          />
        );
      })}
    </FeedWrapper>
  );
};

export default FeedContainer;
