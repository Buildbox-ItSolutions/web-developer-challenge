import styled from "styled-components";

import emptyImage from "./../../../img/image.png";

export const EmptyImage = styled.div`
  background-image: url(${emptyImage});
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  position: absolute;
  top: 30px;
  left: 32px;  
`;
