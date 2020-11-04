import { FC } from 'react';

import { Footer, Header, Main } from '../components';
import { Grid } from './styles';

const Layout: FC = () => {
    return (
        <Grid data-test="layout-grid-component">
            <Header data-test="layout-header-component" />
            <Main data-test="layout-main-component" />
            <Footer data-test="layout-footer-component" />
        </Grid>
    );
};

export default Layout;
