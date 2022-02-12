import styled from "styled-components";

export const Container = styled.div`
    width:88px;
    height:88px;
    margin:0 auto;
    .inputHidden{
        display:none;
    }

    button{
        cursor:pointer;
        width:88px;
        height:88px;
        border-radius:36px;
        overflow:hidden;
        background-color:transparent;
        object-fit: contain;
        border-radius: 36px;
        border: solid 1px #4b4b4b;
        .profile_pic{
            width:88px;
            height:88px;
        }
        :active{
            border: solid 1px #4b4b4b;

        }
    }

`