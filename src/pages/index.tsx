import React, { useCallback, useState } from 'react';
import Layout from 'components/templates/layout';
import { PostType } from 'components/molecules/Post';
import NewPostForm from 'components/organisms/NewPostForm';
import ListPost from 'components/organisms/ListPost';
import { IsStringAlphaNumeric, IsTextValid, TrimString } from 'utils/string';
import { notifyError } from 'utils/toasts';

function Home(): JSX.Element {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [image, setImage] = useState<undefined | string>(undefined);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const disablePost = !name || !description || !image;

  const handleName = useCallback(e => {
    const { value } = e.target;
    const filteredValue = value.replace(/[^A-Za-z0-9 ]/g, '');
    setName(filteredValue);
  }, []);

  const handleDescription = useCallback(e => {
    const { value } = e.target;
    const filteredValue = value.replace(/[^A-Za-z0-9 .,]/g, '');
    setDescription(filteredValue);
  }, []);

  const onDeleteImage = useCallback(() => setImage(undefined), []);

  const onDiscard = useCallback(() => {
    setName('');
    setDescription('');
    setImage(undefined);
  }, []);

  const onPublish = useCallback(() => {
    if (TrimString(name).length <= 0 || TrimString(description).length <= 0) {
      notifyError('Por favor, preencha todos os campos!');
      return;
    }

    if (!IsStringAlphaNumeric(name) || !IsTextValid(description)) {
      notifyError(
        'Por favor, verifique se há caracteres inválidos nos campos preenchidos!'
      );
      return;
    }

    if (disablePost) {
      notifyError(
        'Não foi possível criar o post! Atualize a página e tente novamente!'
      );
      return;
    }

    const post: PostType = {
      id: posts.length,
      name: TrimString(name),
      description: TrimString(description),
      image
    };

    setPosts(data => [...data, post]);
    onDiscard();
  }, [name, description, image, posts]);

  const onDeletePost = useCallback(
    (post: PostType) => {
      const dataFiltered = posts.filter(x => x.id !== post.id);
      setPosts(dataFiltered);
    },
    [posts]
  );

  return (
    <Layout>
      <>
        <NewPostForm
          name={name}
          description={description}
          onChangeDescription={handleDescription}
          onChangeName={handleName}
          onDiscard={onDiscard}
          onPublish={onPublish}
          image={image}
          onDeleteImage={onDeleteImage}
          onChangeImage={e => setImage(URL.createObjectURL(e.target.files[0]))}
          marginBottom="9"
          disablePost={disablePost}
        />
        <ListPost data={posts} onDeletePost={onDeletePost} />
      </>
    </Layout>
  );
}

export default Home;
