import { LogoHeader } from "../../utils/img/logoHeader";
import { Logo, LogoContainer } from "./style";

export default function Header() {
    return (
        <LogoContainer>
            <Logo>
                <LogoHeader />
            </Logo>
        </LogoContainer>
    );
}
