import styled from "styled-components";
import { LogoHeader } from "../../utils/img/logoHeader";


const LogoContainer = styled.div`
    width: 100%; 
    height: 93px;
    background: var(--black-primery);
    display: flex;
    justify-content: center; 
    align-items: center;
`; 

const Logo = styled.div`
    padding: 10px;
`;

export default function Header() {
    return (
        <LogoContainer>
            <Logo>
                <LogoHeader />
            </Logo>
        </LogoContainer>
    );
}
