import React from 'react';
import Head from 'next/head';
import Icon from 'components/atoms/Icon';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Icon name="FaAccessibleIcon" />
      <Card>
        <Button onClick={() => console.log('abc')}>Publicar</Button>
        <Button
          onClick={() => console.log('abc')}
          color="transparent"
          textDecorationLine="underline"
          active="transparent"
          fontColor="gray_scale_7"
        >
          Descartar
        </Button>
      </Card>
      <main />
    </>
  );
}

export default Home;
