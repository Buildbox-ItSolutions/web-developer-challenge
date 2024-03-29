import { useEffect, useState } from "react";
import Header from "../../components/Header";
import TrashIcon from "../../assets/trash.svg";
import PlaceholderImageIcon from "../../assets/image.svg";
import {
  BodyContainer,
  ButtonIcon,
  ButtonPublish,
  ButtonsContainer,
  CreatePostContainer,
  CreatePostImageAndTrashIconContainer,
  CreatePostImageContainer,
  DiscardText,
  FeedText,
  InputName,
  InputNameContainer,
  NoPostsText,
  PlaceholderImageContainer,
  PostsList,
  PostsListContainer,
  PreviewImageContainer,
  TextAreaContent,
  TextAreaContentContainer,
} from "./styles";
import UploadImage from "../../components/UploadImage";
import { object, string } from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Post from "../../components/Post";

interface FormData {
  name: string;
  content: string;
}

interface PostProps {
  id: number;
  authorName: string;
  previewImage: string | null;
  content: string;
}

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [posts, setPosts] = useState<PostProps[]>([]);

  const validationSchema = object().shape({
    name: string().required(),
    content: string().required(),
  });

  const { watch, reset, handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      content: "",
    },
  });

  const discardFormFields = () => {
    reset();
    setImage(null);
    setPreviewImage(null);
  };

  const publishPost = ({ name, content }: FormData) => {
    setPosts((state) => [
      ...state,
      {
        id: Math.random() * Math.random(),
        authorName: name,
        content,
        previewImage,
      },
    ]);

    reset();
    setImage(null);
    setPreviewImage(null);
  };

  const deletePost = (id: number) => {
    const newPosts = posts.filter((post) => post.id !== id)

    setPosts(newPosts)
  }

  const disabelDiscardButton =
    watch("name").length === 0 &&
    watch("content").length === 0 &&
    !previewImage;

  const disablePublishButton =
    watch("name").length === 0 || watch("content").length === 0;

  const UploadImageComponent = () => {
    return image && previewImage ? (
      <UploadImage
        triggerComponent={
          <CreatePostImageAndTrashIconContainer>
            <PreviewImageContainer src={previewImage} />

            <ButtonIcon 
              style={{ marginTop: -20 }}
              onClick={() => {
                setPreviewImage(null)
                setImage(null)
              }}
            >
              <img src={TrashIcon} />
            </ButtonIcon>
          </CreatePostImageAndTrashIconContainer>
        }
        setImage={setImage}
      />
    ) : (
      <UploadImage
        triggerComponent={
          <PlaceholderImageContainer>
            <img src={PlaceholderImageIcon} />
          </PlaceholderImageContainer>
        }
        setImage={setImage}
      />
    );
  };

  useEffect(() => {
    if (image) {
      setPreviewImage(URL.createObjectURL(image));
    }
  }, [image]);

  return (
    <>
      <Header />

      <BodyContainer>
        <CreatePostContainer>
          <CreatePostImageContainer>
            <UploadImageComponent />
          </CreatePostImageContainer>

          <InputNameContainer>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <InputName
                  type="text"
                  placeholder="Digite o seu nome"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </InputNameContainer>

          <TextAreaContentContainer>
            <Controller
              control={control}
              name="content"
              render={({ field }) => (
                <TextAreaContent
                  placeholder="Mensagem"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </TextAreaContentContainer>

          <ButtonsContainer>
            <div>
              <ButtonIcon
                disabled={disabelDiscardButton}
                onClick={discardFormFields}
              >
                <DiscardText>Descartar</DiscardText>
              </ButtonIcon>
            </div>

            <ButtonPublish
              disabled={disablePublishButton}
              onClick={handleSubmit(publishPost)}
            >
              Publicar
            </ButtonPublish>
          </ButtonsContainer>
        </CreatePostContainer>

        <PostsListContainer>
          <FeedText style={{ marginBottom: posts.length === 0 ? 40 : 0 }}>Feed</FeedText>

          <PostsList style={{ 
            alignItems: posts.length === 0 ? "center" : "normal",
            justifyContent: posts.length === 0 ? "center" : "normal"
          }}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post 
                key={post.id}
                authorName={post.authorName}
                content={post.content}
                imgSrc={post.previewImage}
                onDelete={() => deletePost(post.id)}
              />
            ))
          ) : (
            <NoPostsText>
              Nenhum post no seu Feed, que tal publicar um?
            </NoPostsText>
          )}
          </PostsList>
        </PostsListContainer>
      </BodyContainer>
    </>
  );
}
