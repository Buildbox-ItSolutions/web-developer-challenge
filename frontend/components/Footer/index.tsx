import { FC } from 'react';

import { Footer, P } from './styles';

const FooterComponent: FC = () => {
    return (
        <Footer>
            <P>&copy; Copyright 2019 - 2020.</P>
            <P>
                All rights reserved. Powered by the <strong>Buildbox</strong>
            </P>
        </Footer>
    );
};

export default FooterComponent;
