import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(97, 97, 97, 0.8);
  position: fixed;
  display: flex;
  z-index:3;
  justify-content: center;
  align-items: center;

`;

export const ModalWrapper = styled.div`
   width: 516px;
   height: 380px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  box-sizing:border-box;
  padding: 10px 20px;
  display:flex;
  flex-wrap:wrap;
  margin-top:10px;
  img{
    width: 88px;
    height: 88px;
    object-fit: contain;
    border-radius: 40%;
  }
  div{
    width:100%;
    
  }

  @media screen and (max-width:768px){
      width:90%
      max-width:578px;
  }
`;



export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 516px;
  height: 353px;
  color: #141414;
  p {
    margin-bottom: 1rem;
    margin-top:50px;
  }
  color:#9f9f9f;
`;


export const ButtonCloseContainer = styled.div`
  width:100%;
  height:20px;
  display:flex;
  justify-content:flex-end;
b  img{
    width:100%;
    height:100%;
  }
  button {
    width:20px;
    height:20px;
    background-color:transparent;
    
  }
  svg{
    color:#c2582b;
    font-size:15px;
    cursor:pointer;
    transition:0.250s;
    :hover{
      color:#3b3b3b;
    }
  }
  div{
    width:30px;
    height:30px;
    border-radius:50%;
    border:1px solid #e75010;
    margin:0;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:0.250s;
    :hover{
      /* border:1px solid #ebac91; */
      background-color: #e75010;
    }
  }
`

