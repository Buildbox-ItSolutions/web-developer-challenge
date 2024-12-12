import styled from "styled-components";

import {
  motion,
} from "framer-motion"

import {
  PostItem,
} from "../../types";

import {
  IconButton,
} from "../IconButton";

import {
  Profile,
} from "../Profile";

import deleteIcon from '../../assets/delete.svg';

const PostView = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 56px 24px 32px 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray[ 400 ]};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.gray[ 450 ]};
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-left: 32px;
`;

const Message = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[ 250 ]};
`;

const OwnerView = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const OwnerLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[ 350 ]};
  margin-bottom: 2px;
`;

const Owner = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[ 150 ]};
`;

export interface PostProps extends PostItem {
  handleDeletePost: () => void;
};

export const Post: React.FC<PostProps> = ({
  picture,
  message,
  name,
  handleDeletePost,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto'}}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: .5 }}
    >
      <PostView>
        <Profile
          picture={ picture }
        />

        <Info>
          <Message>{ message }</Message>

          <OwnerView>
            <OwnerLabel>Enviador por</OwnerLabel>

            <Owner>{ name }</Owner>
          </OwnerView>
        </Info>

        <IconButton
          onClick={ handleDeletePost }
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
          }}
        >
          <img
            src={ deleteIcon }
            alt="icon"

          />
        </IconButton>
      </PostView>
    </motion.div>
  );
};
