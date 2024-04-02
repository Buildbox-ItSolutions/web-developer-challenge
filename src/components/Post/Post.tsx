import { IPost } from "../../App";
import { IoIosCloseCircle } from "react-icons/io";
import { NewPostDiv, Img } from "../NewPost/NewPost";
import styled from "styled-components";

interface Props {
  post: IPost;
  handleRemovePosts: (post: IPost) => void;
}

const PostDiv = styled(NewPostDiv)`
  padding-top: 12px;
  padding-right: 12px;
`;

const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const PostMainInternalDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  display: flex;
  gap: 20px;
`;

const PostContentDiv = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Content = styled.p`
  text-align: left;
  font-size: 16px;
  color: var(--grey-5);
  width: 100%;
  word-break: break-all;
`;

const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const SentBy = styled.p`
  font-size: 12px;
  color: var(--grey-3);
`;

const Name = styled.p`
  font-size: 14px;
  color: var(--grey-4);
`;

const Post = ({ post, handleRemovePosts }: Props) => {
  return (
    <PostDiv>
      <CloseDiv>
        <IoIosCloseCircle
          color="#71bb00"
          size={24}
          onClick={() => {
            handleRemovePosts({ ...post });
          }}
        />
      </CloseDiv>
      <PostMainInternalDiv>
        <Img src={post.img} />
        <PostContentDiv>
          <Content>{post.content}</Content>
          <InfoDiv>
            <SentBy>Enviado por</SentBy>
            <Name>{post.name}</Name>
          </InfoDiv>
        </PostContentDiv>
      </PostMainInternalDiv>
    </PostDiv>
  );
};

export default Post;
