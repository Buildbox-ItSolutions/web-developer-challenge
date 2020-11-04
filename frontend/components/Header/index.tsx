import { FC } from 'react';

import { Header, Img } from './styles';

const HeaderComponent: FC = () => {
    return (
        <Header>
            <Img src="/bx-logo.png" alt="Logo" data-test="header-logo" />
        </Header>
    );
};

export default HeaderComponent;
