import styled from "styled-components";

export const PostBox = styled.div`
  max-width: 32.25rem;
  height: fit-content;

  margin-bottom: 1rem;
  padding: .75rem .75rem 2rem 1.5rem;
 
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  opacity: 0;
  transition: opacity .5s ease-in-out;
`

export const DeleteIcon = styled.div`
  display: flex;
  flex-direction: row-reverse;

  margin-bottom: 1.5rem;
  
  img{
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  img {
    width: 5.5rem;
    height: 5.5rem;
    margin-bottom: 1.5rem;
    border-radius: 2.25rem;
    object-fit: contain;
  }
`

export const PostTextBox = styled.div`
  max-width: 21.75rem;
  height: fit-content;

  p, h2, h3 {
    color: #9f9f9f;
  }
  
  p{
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  h3 {
    font-size: .75rem;
  }
  h2 {
    font-size: .875rem;
  }
`;
