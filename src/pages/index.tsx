import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Icon from 'components/atoms/Icon';
import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Input from 'components/atoms/Input';
import TextArea from 'components/atoms/TextArea';
import Typography from 'components/atoms/Typography';
import Layout from 'components/templates/layout';
import ImageInput from 'components/atoms/ImageInput';

function Home(): JSX.Element {
  const [image, setImage] = useState<undefined | string>(undefined);
  const input = useRef<HTMLInputElement>();
  return (
    <Layout>
      <>
        <Head>
          <title>Create Next App</title>
        </Head>

        <Card>
          <ImageInput
            image={image}
            onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
          />
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
      </>
    </Layout>
  );
}

export default Home;
