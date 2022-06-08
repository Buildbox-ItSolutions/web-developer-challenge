import React from 'react';
import Head from 'next/head';
import Icon from 'components/atoms/Icon';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input';
import TextArea from 'components/atoms/TextArea';
import Typography from 'components/atoms/Typography';

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
        <Typography fontColor="primary">Teste tipografia </Typography>
        <Typography fontSize="lg" fontColor="orange">
          Teste tipografia 2
        </Typography>
        <Typography fontWeight="bold">Teste tipografia 3</Typography>
        <Typography>Teste tipografia 4</Typography>
        <Input marginBottom="6" />
        <Input />
        <TextArea />
      </Card>
      <main />
    </>
  );
}

export default Home;
