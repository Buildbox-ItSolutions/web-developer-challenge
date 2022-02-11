import styled from "styled-components";

export const Container = styled.div`
  width: 516px;
  height: 225px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  box-sizing:border-box;
  padding: 10px 20px;
  display:flex;
  flex-wrap:wrap;
  margin-right:0;
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
      width:100%
  }
` 




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
      color:#ebac91;
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
      border:1px solid #ebac91;

    }
  }
`

export const Details = styled.div` 
    width:100%;
    margin:0;
    padding:0px;
    display:flex;
    margin-top:-10px;
    h6,h3{
      margin:0;
    }

    h6{
      color:#5f5f5f;
      font-size:12px;
      font-weight: normal;
    }
    h3{
      color:#7a7a7a;
      font-weight: normal;
      font-size:14px;
    }

    p{
        max-width:90%;
        color:#9f9f9f;
    }

    div{
      margin-left:20px;
      margin-top:-10px;
    }
    
   
`