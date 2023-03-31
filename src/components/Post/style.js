import styled from "styled-components";


export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 52px 36px 36px;
  position: relative;

  background: #313131;
  border: solid 1px #3b3b3b;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .user-image {
    display: flex;
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    border: solid 2px #3b3b3b;
    border-radius: 30px;

    background: ${props => props.image === undefined ? 'transparent' : `url(${props.image}) no-repeat`};
    background-size: cover;
    background-position: center;
  }

  .post-infos {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    p {
      font-size: 1.2rem;
      color: #9f9f9f;
    }
    span {
      font-size: .8rem;
      color: #5f5f5f;
      margin: 15px 0 4px 0;
    }
    h4 {
      color: #7a7a7a;
    }
  }

  button {
    position: absolute;
    top: 20px;
    right: 25px;
    cursor: pointer;

    background: transparent;
    border: none;
    color: #ef4444;
    font-size: 1.1rem;
  }

  @media (max-width: 500px) {
    padding: 52px 20px 20px;
  }
`