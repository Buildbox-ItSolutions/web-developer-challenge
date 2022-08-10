import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  margin-bottom: 3rem;
  width: 500px;
  height: 200px;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-900);
  box-shadow: 0 0 0.035rem white;
  p {
    color: var(--gray-400);
  }

  span {
    font-size: 0.75rem;
    color: var(--gray-20);
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 150px;
    min-height: 150px;
  }
  @media (max-width: 400px) {
    width: 250px;
    height: 130px;
    min-height: 130px;
    justify-content: space-between;
  }

  .content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .description {
    margin-left: 1rem;
    display: flex;
    width: 100%;
    height: 80%;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    width: 90px;
    height: 90px;
    border-radius: 35px;
    @media (max-width: 500px) {
      width: 60px;
      height: 70px;
      border-radius: 25px;
    }
    @media (max-width: 400px) {
      width: 60px;
      height: 70px;
      border-radius: 25px;
    }
  }
  .align-icon {
    height: 100%;
    width: 30px;
    display: flex;
    @media (max-width: 500px) {
      width: 20px;
    }
  }

  .remove-icon {
    height: 25px;
    cursor: pointer;
    @media (max-width: 500px) {
      height: 15px;
    }
  }
`;
