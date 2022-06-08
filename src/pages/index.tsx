import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import Layout from 'components/templates/layout';
import NewPostForm from 'components/organisms/NewPostForm';

function Home(): JSX.Element {
  const [image, setImage] = useState<undefined | string>(undefined);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleName = useCallback(e => setName(e.target.value), []);

  const handleDescription = useCallback(
    e => setDescription(e.target.value),
    []
  );

  return (
    <Layout>
      <>
        <Head>
          <title>Create Next App</title>
        </Head>
        <NewPostForm
          name={name}
          description={description}
          onChangeDescription={handleDescription}
          onChangeName={handleName}
          onDiscard={() => {}}
          onPublish={() => {}}
          image={image}
          onChangeImage={e => setImage(URL.createObjectURL(e.target.files[0]))}
        />
      </>
    </Layout>
  );
}

export default Home;
