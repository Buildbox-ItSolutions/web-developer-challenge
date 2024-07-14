import styled from "styled-components";

interface PostProps {
  name: string;
  message: string;
  photo: string;
  onDelete: () => void;
}

const PostContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 16px;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const DeleteButton = styled.button`
  background: none;
  color: red;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 32px;
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: rgba(255, 0, 0, 0.1); /* Fundo levemente vermelho */
    color: darkred; /* Texto um pouco mais escuro */
  }
`;

const Post: React.FC<PostProps> = ({ name, message, photo, onDelete }) => {
  return (
    <PostContainer>
      <Photo src={photo} alt={name} />
      <Content>
        <h3>{name}</h3>
        <p>{message}</p>
      </Content>
      <DeleteButton onClick={onDelete}>&times;</DeleteButton>
    </PostContainer>
  );
};

export default Post;
