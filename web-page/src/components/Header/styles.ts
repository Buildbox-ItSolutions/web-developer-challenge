import styled from "styled-components";


export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #2B2B2B;
  color: #71BB00;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 10;
  margin-bottom: 2rem;

  .page-details{
    h1{
      font-size: 1.6rem;
      font-weight: 900;
    }
    h2{
      font-size: 0.8rem;
      font-weight: 400;
      color: #474747;
    }
  }
`;
