import React, { useCallback, useState } from 'react';
import Layout from 'components/templates/layout';
import { PostType } from 'components/molecules/Post';
import NewPostForm from 'components/organisms/NewPostForm';
import ListPost from 'components/organisms/ListPost';

function Home(): JSX.Element {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [image, setImage] = useState<undefined | string>(undefined);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const disablePost = !name || !description || !image;

  const handleName = useCallback(e => setName(e.target.value), []);

  const handleDescription = useCallback(
    e => setDescription(e.target.value),
    []
  );

  const onDeleteImage = useCallback(() => setImage(undefined), []);

  const onDiscard = useCallback(() => {
    setName('');
    setDescription('');
    setImage(undefined);
  }, []);

  const onPublish = useCallback(() => {
    if (disablePost) {
      return;
    }

    const post: PostType = {
      id: posts.length,
      name,
      description,
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
