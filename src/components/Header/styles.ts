import styled from "styled-components";

const Header = styled.div`
  height: 93px;
  width: 100%;

  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  background-color: #2b2b2b;

  img {
    object-fit: contain;
    width: 103px;
    height: 45px;
  }
`;

export default Header;
