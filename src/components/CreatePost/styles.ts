import styled from "styled-components";

const CreatePost = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 516px;
  border-radius: 3px;
  background-color: #3b3b3b;
  margin: 30px 30px 0px;
  padding: 1.5rem;
  transition: all 0.3s;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    margin: 10px 10px 0px;
  }
`;

export default CreatePost;
