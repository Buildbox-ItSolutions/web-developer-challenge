import styled from "styled-components";

export const CommentsContainer = styled.div`
  width: 516px;
  height: 225px;
  background-color: #313131;
  padding: 12px 12px 32px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  display: grid;
  grid-template-columns: 120px auto;
  align-items: center;
  position: relative;
  margin-bottom:1rem;

  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 36px;
    object-fit: contain;
  }

  button {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    color: #d65923;
    cursor: pointer;
    padding: 0.75rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  p {
    color: #9f9f9f;
    font-size: 1rem;
    line-height: 125%;
    text-align: left;
  }

  footer {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    color: #5f5f5f;
    span {
      font-size: 0.875rem;
      color: #7a7a7a;
    }
  }
`;
