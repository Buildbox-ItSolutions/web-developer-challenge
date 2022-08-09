import styled  from 'styled-components';
import LogoImg from 'assets/logo.svg'
const Content = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    max-width:100%;
    width:100vw;
    max-height:8vh;
    height:93px;

    padding: 24px 631px 24px 632px;
    background-color: #2b2b2b;
`;

const Logo = styled.img`
    width:103px;
    height:43px;
    object-fit: contain;
`;

export default function Header() {
    return (
        <Content>
            <Logo src={LogoImg}/>
        </Content>
    );
}