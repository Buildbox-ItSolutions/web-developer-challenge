import styled  from "styled-components";
import image from 'assets/image.svg'
const Content = styled.div`
    display:flex;
    flex-direction:column;
    width: 516px;
    height: 353px;

    margin: 40px 425px 56px;
    padding: 24px;

    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`;
const ImgPost = styled.img`
    width: 88px;
    height: 88px;
    
    margin: 0 8px 16px 190px;
    padding: 32px;
    object-fit: contain;
    
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
`;
const NameInput = styled.input`
    width: 468px;
    height: 40px;
    margin: 16px 0 8px;
    padding: 12px 351px 11px 16px;
    border-radius: 8px;
    border:none;
    background-color: #494949;
    outline:none;
    color:white;
    ::placeholder{
        width: 101px;
        height: 17px;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #9f9f9f;
    }
`;
const AreaInput = styled.input`
    width: 468px;
    height: 80px;
    margin: 8px 0 32px;
    padding: 12px 382px 51px 16px;
    border-radius: 8px;
    border:none;
    background-color: #494949;
    outline:none;
    color:white;
`;

export default function PostMake() {
    return (
        <Content>
            <ImgPost src={image} />
            <NameInput placeholder='Digite seu nome'/>
            <AreaInput placeholder='Mensagem'/>
        </Content>
    );
}