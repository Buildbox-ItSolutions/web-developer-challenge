import styled from "styled-components";

const CreatePost = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 516px;
  border-radius: 3px;
  background-color: #313131;
  border: 1px solid #3b3b3b;
  margin: 30px 30px 40px;
  padding: 1.5rem 1.5rem 0.8rem;
  transition: all 0.3s;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 425px) {
    margin: 10px 30px;
  }
`;

export default CreatePost;
