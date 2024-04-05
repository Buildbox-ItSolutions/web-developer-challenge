import styled from "styled-components";

export const PostContainer = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  gap: 2rem;

  /* margin: 0 auto; */
  padding: 3.5rem 1.5rem 2rem;

  width: 32.5rem;
  max-width: 100%;

  border-radius: 3px;
  border: 1px solid ${props => props.theme["border-post"]};


  background-color: ${props => props.theme["bg-post"]};

  .post-img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.5rem;
    height: 5.5rem;

    overflow: hidden;
    object-fit: cover;

    border-radius: 36px;
    border: 1px solid ${props => props.theme["border-post"]};
  }

  .svg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.5rem;
    height: 5.5rem;

    border-radius: 36px;
    border: 1px solid ${props => props.theme["border-post"]};

    color: ${props => props.theme["border-post"]};
  }

  .post-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .time {
    margin-bottom: 1rem;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.29px;

    color: ${props => props.theme["post-h5"]};
  }

  p {
    font-size: 1rem;
    line-height: 20px;

    width: 100%;
    max-width: 21.75rem;

    color: ${props => props.theme["post-text"]};
  }

  .footer-post {
    padding-top: 1.5rem;
  }
  
  h5 {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.29px;

    color: ${props => props.theme["post-h5"]};
  }

  h3 {
    font-weight: 0.875rem;
    font-weight: 400;
    line-height: 18px;

    color: ${props => props.theme["post-name"]};
  }

  .x-btn {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;


    width: 1.5rem;
    height: 1.5rem;
    padding: 4px;

    border: 1px solid ${props => props.theme.orange};
    border-radius: 50%;
    cursor: pointer;

    transition: 0.3s ease-in-out;

    color: ${props => props.theme.orange};

    &:hover {
      border: 1px solid ${props => props.theme["hover-orange"]};
      color: ${props => props.theme["hover-orange"]};
    }
  }
`