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
  .remove_button{
    color:#c2582b;
    font-size:15px;
    cursor:pointer;
    transition:0.250s;
    :hover{
      color:#3b3b3b;
    }
  }

  
  .edit_div, .remove_div{
    width:30px;
    height:30px;
    border-radius:50%;
   
    margin:0;
    margin-left:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:0.250s;
    
  }

  .remove_div{
    border:1px solid #e75010;
    :hover{
      background-color: #e75010;
    }
  }

  .edit_div{
    cursor:pointer;
    border:1px solid #e7d910;
    :hover{
      background-color: #e7eb19;
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
        min-height:70px;
        /* height:150px; */
        color:#9f9f9f;
    }

    div{
      margin-left:20px;
      margin-top:-10px;
    }
    
    @media screen and (max-width:768px){
      p{
        height:100px;
        overflow:scroll;
      }
    }
   
`