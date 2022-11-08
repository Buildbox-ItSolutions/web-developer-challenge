import styled from 'styled-components'

export const Container = styled.section`
    
`;

export const ContainerFeed = styled.section`    
    margin: 0 auto;
`;

export const ProductAdd = styled.section`
    margin-top: 40px;
    min-height: 45vh;
    max-height: 70vh;
    width: 100%;
    background-color: #212121;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #inpuTextArea {
        background-color: #4e4e4e;
        width: 90%;
        height: 80px;
        object-fit: contain;
        color: white;
    }
`;

export const ImgImport = styled.img`
    padding: 0;
    margin-bottom: 20px;
    background: center cover no-repeat;
    
    width: 90px;
    height: 90px;
    border: 1px solid #303030;
    border-radius: 30px;
    cursor: pointer;
    
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 3px #71bb00;
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

&:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: '';
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(center, ellipse, rgba(200, 0, 0, 0.95) 0%, rgba(200, 0, 0, 1) 80%);
  background: radial-gradient(ellipse at center, rgba(200, 0, 0, 0.95) 0%, rgba(200, 0, 0, 1) 80%);
  /* W3C */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform, opacity;
  transition-property: transform, opacity;
}
&:hover, &:focus, &:active {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  /* move the element up by 5px */
}
&:hover:before, &:focus:before, &:active:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}
`;

export const InputTitleAddPost = styled.input`
    background-color: #4e4e4e;
    width: 90%;
    height: 40px;
    margin-bottom: 0.5em;
    color: white;
`;

export const InputTxtAreaAddPost = styled.textarea`
    background-color: #4e4e4e;
    width: 90%;
    height: 80px;
`;

export const BtnDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: end;   
    margin-top: 20px;
`;

export const BtnDiscart = styled.button`    
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  text-align: end;
  padding: 10px;  
  font-weight: 400;
  border-radius: 10px;
  background-color: #333;
  color: white;

  &:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 100%;
  right: 0;
  bottom: 0;
  background: #2098D1;
  height: 4px;
  -webkit-transition-property: left;
  transition-property: left;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
  &:hover:before, &:focus:before, &:active:before {
  left: 0;
}
`;

export const BtnAdd = styled.button`
    background-color: #71bb00;
    border-radius: 10px;
    font-weight: 400;
    padding: 10px;
    margin-left: 15px;
    transition: all .3s;

    &:hover {
        filter: brightness(1.3);
    }
`;

export const NewItemContainer = styled.div`
    background-color: #212121;
    width: 100%;
    color: white;
    border-radius: 5px;
    display: flex;
    min-height: 216px;
    max-height: 600px;
    margin: 0 auto;

    .btnDiv {
        display: flex;
        align-items: flex-end;
        justify-content: end;

       button {
        margin-top: 20px;
        padding: 2px 7px;
        border-radius: 50px;
        font-size: 0.7em;
        color: red;
        border: 1px solid red;
        background-color: #212121;
        transition: all .5s;

        &:hover {
            background-color: #fff;
        }
       }               
    }
`;

export const Feed = styled.div`   
    width: 100%;
    color: white;
    border-radius: 5px;
    display: flex;
    height: 165px;    
`;

export const ImgPost = styled.img`
    width: 80px;
    height: 80px;    
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 15%;
    margin: 50px 50px 0px 20px;
    transition: all .7s;

    &:hover {
        box-shadow: 1px 2px 21px 5px rgba(0,224,36,0.25);
        cursor: pointer;
    }
    
`;

export const TextPostContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;  

    h6 {
        opacity: 0.8;
        font-size: 0.9em;
    }

    .sendFor {
        margin: 15px 0 0;
        opacity: 0.6;
        font-size: 0.7em;
    }

    .nameUser {
        margin: 0;
        font-size: 0.82em;
        opacity: 0.7;
    }

`;

export const FileInput = styled.input`
    display: none;
`;

export const FeedContainer = styled.section`
    .feedTitle {
        color: white;
        font-weight: 600;
        border-bottom: 3px solid #71bb00;
        margin-bottom: 0;
    }
`;