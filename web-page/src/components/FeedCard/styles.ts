import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: #313131;
  border: 1px solid #373737;
  position: relative;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .delete-button{
    margin-left: auto;
    border: none;
    background-color: #313131;
    cursor: pointer;
  }
`;
export const H5 = styled.h5`
  margin: auto;
  width: 100%;
  max-width: 40rem;
  margin-bottom: 0.5rem;
  color: #5C5C5C;
`;

export const ContainerBody = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.5rem;

  img{
    width: 8rem;
    height: 8rem;
    border-radius: 40%;
    border: 1px solid #494949;
    margin-right: 1rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  p{
    color: #919191;
    margin-bottom: 2rem;
    text-align: start;
  }
  span{
    color: #595959;
    font-weight: 600;
    font-size: 0.8rem;
  }
  & > span + span{
    color: #919191;
    font-weight: 500;
  }
`;
