import { Formik, Form, FormikHelpers } from "formik";
import { useCallback, useState, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import iconEmpty from "../../assets/icons/empty.svg";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Item } from "../../components/Feed/Item";
import { Loader } from "../../components/Loader";
import { ModalConfirmationDeletePost } from "../../components/Feed/ModalConfirmationDeletePost";
import { UploadThumbnail } from "../../components/UploadThumbnail";
import { IPost } from "../../interfaces/IPost";
import api from "../../services/api";
import {
  Content,
  Wrapper,
  ContainerForm,
  ContainerFeed,
  Empty,
} from "./styles";

interface IFileImage {
  file: File;
  url: string;
}

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  message: yup.string().required("A descrição é obrigatória"),
});

type SubmitProps = Omit<IPost, "image" | "id">;

export const Dashboard = () => {
  const [thumbnail, setThumbnail] = useState<IFileImage>();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [idPostRemove, setIdPostRemove] = useState<number>();

  useEffect(() => {
    const handleGetPosts = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/posts");
        setPosts(data);
      } catch {
        toast.error("Erro ao buscar posts");
      } finally {
        setLoading(false);
      }
    };
    handleGetPosts();
  }, []);

  const onSelectFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const url = URL.createObjectURL(e.target.files[0]);
      setThumbnail({ file: e.target.files[0], url });
    }
  }, []);

  const handleSubmit = async (
    { message, name }: SubmitProps,
    helpers: FormikHelpers<SubmitProps>
  ) => {
    try {
      setLoading(true);
      if (!thumbnail) {
        toast.error("Adicione uma imagem");
        return;
      }
      const { data } = await api.post("/posts", {
        name,
        message,
        image: thumbnail?.url,
        id: Math.floor(100000 + Math.random() * 900000),
      });
      helpers.resetForm();
      setThumbnail(undefined);
      setPosts((old) => [...old, data]);
      toast.success("Post adicionado com sucesso");
    } catch {
      toast.error("Erro ao adicionar post");
    } finally {
      setLoading(false);
    }
  };

  const handleRemovePost = useCallback(async (id: number) => {
    try {
      setLoading(true);
      await api.delete(`/posts/${id}`);
      setPosts((old) => [...old].filter((item) => item.id !== id));
      setIdPostRemove(undefined);
      toast.success("Post removido com sucesso");
    } catch {
      toast.error("Error ao remover post");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main>
      {loading && <Loader />}
      <ModalConfirmationDeletePost
        idPost={idPostRemove}
        onRemovePost={handleRemovePost}
        onClose={() => setIdPostRemove(undefined)}
      />

      <Header />
      <Content>
        <Wrapper>
          <ContainerForm>
            <UploadThumbnail
              onSubmit={onSelectFile}
              urlThumbnail={thumbnail?.url}
              onRemoveImage={() => setThumbnail(undefined)}
            />

            <Formik
              initialValues={{ name: "", message: "" }}
              validationSchema={schema}
              onSubmit={(values, formikHelpers) =>
                handleSubmit(values, formikHelpers)
              }
            >
              {({ values }) => (
                <Form className="mt-5">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                  />

                  <Input
                    type="textarea"
                    name="message"
                    placeholder="Mensagem"
                  />

                  <div className="btns-actions">
                    <button type="button" id="btn-discard">
                      Descartar
                    </button>
                    <button
                      type="submit"
                      id="btn-publish"
                      disabled={!values.message || !values.name || !thumbnail}
                    >
                      Publicar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </ContainerForm>

          <ContainerFeed>
            <h5>Feed</h5>

            {posts.map((item) => (
              <Item
                key={item.id}
                post={item}
                onConfirmRemovePost={(id: number) => setIdPostRemove(id)}
              />
            ))}

            {!loading && posts.length === 0 && (
              <Empty>
                <img src={iconEmpty} alt="Nada encontrado" width="100" />
                <h5>Nada encontre. Adicione um novo post :)</h5>
              </Empty>
            )}
          </ContainerFeed>
        </Wrapper>
      </Content>
    </main>
  );
};
