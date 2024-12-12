import styled from "styled-components";

const AreaPost = styled.textarea`
  width: 100%;
  height: 80px;
  font-size: 14px !important;
  font-stretch: normal !important;
  line-height: 1.29 !important;
  letter-spacing: normal !important;
  background-color: #494949;
  border-radius: 8px;
  outline: none;
  border: none;
  margin: 0.7rem 0;
  padding: 1rem;
  resize: none;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 8px;
  }

  ::placeholder {
    color: #9f9f9f;
  }
`;

export default AreaPost;
