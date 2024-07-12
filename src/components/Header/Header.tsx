import {Header, HeaderContent, HeaderSubTitle, HeaderTitle} from "./Header.styles.ts";

type HeaderComponentProps = {
    MainTitle: string;
    SubTitle: string;
}

export const HeaderComponent = ({ MainTitle, SubTitle }: HeaderComponentProps) => {
    return <Header>
        <HeaderContent>
            <HeaderTitle>{MainTitle}</HeaderTitle>
            <HeaderSubTitle>{SubTitle}</HeaderSubTitle>
        </HeaderContent>
    </Header>
}


