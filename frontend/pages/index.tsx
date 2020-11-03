import Head from 'next/head';
import React from 'react';

import Layout from '../Layout';

const Home: React.FC = () => {
    return (
        <>
            <Head data-test="index-head-component">
                <title>Buildbox</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout data-test="index-layout-component" />
        </>
    );
};

export default Home;
