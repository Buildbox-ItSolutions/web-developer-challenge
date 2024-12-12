import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Body, DiscardButton, FeedTitle, Form, Header, Input, Main, PublishButton, Subtitle, Textarea, Title } from './styled';
import InputImage from '../InputImage';
import Post, { IPost } from '../post';



const App = () => {

  const [img, setImg] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>([{
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/P%C3%A3o_de_A%C3%A7ucar_-_Sugarloaf_Mountain_-_Zuckerhut_-_2022.jpg",
    message: `Sugar Loaf is a peak situated in Rio de Janeiro, Brazil, at the mouth of Guanabara Bay on a peninsula that juts out 
              into the Atlantic Ocean. Rising 396 m (1,299 ft) above the harbor, the peak is named for its resemblance to the
              traditional shape of concentrated refined loaf sugar.`,
    author: "Ciro Monteiro"
  }])
  const { handleSubmit, control, reset, watch, setValue } = useForm<IPost>({
    defaultValues: {
      img: "",
      message: "",
      author: ""
    }
  });

  useEffect(() => {
    setValue("img", img);
  }, [img]);

  const watchFields = watch(["img", "message", "author"]);
  
  const active = watchFields.reduce((pv, cv) => pv && cv.length !== 0, true);

  const handleDiscard = useCallback(() => {
    setImg("");
    reset();
  }, []);


  const handlePostDelete = useCallback((index: number) => () => {
    setPosts(p => p.filter((_, ind) => ind !== index));
  }, [])

  const onSubmit = useCallback((values: any) => {
    setPosts(p => [ ...p, values ]);
    handleDiscard();
  }, []);

  return (
    <Main className="h-100 d-flex flex-column align-items-center">
      
      <Header className="w-100 py-4 d-flex flex-column align-items-center">
        <Title>buildbox</Title>
        <Subtitle>web challenge</Subtitle>
      </Header>

      <Body className="w-100 mt-5 d-flex flex-column">
        <Form className="w-100 p-5 d-flex flex-column align-items-center"
          onFinish={handleSubmit(onSubmit) as any}>

          <Form.Item>
            <InputImage value={img} onChange={setImg}/>
          </Form.Item>

          <Form.Item className="w-100">
            <Controller
              name="author"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} placeholder="Digite seu nome" className="w-100" />}
            />
          </Form.Item>

          <Form.Item className="w-100">
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Textarea {...field} placeholder="Mensagem" className="w-100" />}
            />
          </Form.Item>

          <Form.Item className="w-100 d-flex justify-content-end">
            <DiscardButton onClick={handleDiscard}>Descartar</DiscardButton>
            <PublishButton active={active} disabled={!active} className="px-4 py-2 ms-2" type="submit">Publicar</PublishButton>
          </Form.Item>

        </Form>

        <FeedTitle className="mt-5 mb-2 ms-5 ms-sm-0">Feed</FeedTitle>

        <div className="d-flex flex-column">
          {posts.map((post, index) => <Post {...post} onDelete={handlePostDelete(index)} />)}
        </div>

      </Body>
    </Main>
  );
}

export default App;
