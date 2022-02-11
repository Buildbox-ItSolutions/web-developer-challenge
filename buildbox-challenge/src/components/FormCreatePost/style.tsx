import styled from "styled-components";

export const Container = styled.div`
  width: 516px;
  height: 353px;
  margin:0 auto;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display:flex;
  justify-content:center;
  box-sizing:border-box;

  @media screen and (max-width:768px){
      width:90%
  }
`


export const Form = styled.form`
    width:90%;
    .input_text{
        width: 100%;
        margin: 16px 0 8px;
        border-radius: 8px;
        background-color: #494949;
        padding:5px;
        transition: 0.5s;
        box-sizing:border-box;
        outline:none;
        border:1px solid transparent;
        color:white;
        ::placeholder{
            color:#9f9f9f;
        }
        :focus{
            border-color:none;
            border:1px solid #0a0a0a;
        }

    }
    .name_field{
        height:40px;
    }

    .text_area{
        height: 80px;
    }
    p{
        margin:0;
        padding:0;
        font-size:12px;
        color:red;
        height:10px;
    }
`

export const ButtonsContainer = styled.div ` 
    width:100%;
    display:flex;
    justify-content:flex-end;

    margin-top:0px;
`


export const ButtonDiscard = styled.button`
    background-color:transparent;
    text-decoration:underline;
    border:none;
    cursor:pointer;
    transition:0.5s;
    color:#5f5f5f;
    :hover{
        color:white;
    }
`


export const ButtonPublish = styled.button` 
    margin-left:10px;
    cursor:pointer;
    width: 98px;
    height: 41px;
    margin: 0 0 0 24px;
    padding: 12px 24px;
    object-fit: contain;
    border-radius: 8px;
    background-color: #5f5f5f;
    transition:0.5s;
    border:none;
    color:#3b3b3b;

    :hover{
        background-color:#71BB01;
        color:white;
    }
`