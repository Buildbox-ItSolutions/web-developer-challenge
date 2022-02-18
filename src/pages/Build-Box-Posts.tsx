import { UseAuth } from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

import { FormEvent, useEffect, useState } from "react";
import { database, ref, set, push, get, child } from "../services/firebase";

import logoImg from "../assets/images/logo.svg";
import photoUpload from "../assets/images/photo-upload.svg";

import {
  PageBuildBox,
  Header,
  MainContent,
  MainCreatePost,
  PhotoUploadImg,
  UserAvatarImg,
  InputName,
  TextAreaPost,
  DiscardButton,
  CreatePostButtonDiv,
  PublishButton,
  DivSpan,
} from "../styles/build-box";
import { Posts } from "../components/Posts";

type FirebasePostsType = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
      uid: string;
    };
    content: string;
  }
>;

type CreatePostType = {
  id: string;
  author: {
    name: string;
    avatar: string;
    uid: string;
  };
  content: string;
};

export function BuildBoxPosts() {
  const navigate = useNavigate();
  const { user } = UseAuth();
  const [newPost, setNewPost] = useState("");
  const [createPost, setCreatePost] = useState<CreatePostType[]>([]);
  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  });
  useEffect(() => {
    const postRef = ref(database);

    get(child(postRef, `build-box/posts`))
      .then((snapshot) => {
        const databasePost: FirebasePostsType = snapshot.val() ?? {};

        const parsedPostResult = Object.entries(databasePost).map(
          ([key, value]) => {
            return {
              id: key,
              content: value.content,
              author: value.author,
            };
          }
        );
        setCreatePost(parsedPostResult);
      })
      .catch((error) => {
        alert(error);
      });
  }, [createPost]);

  async function handleCreateNewPost(event: FormEvent) {
    event.preventDefault();

    if (newPost.trim() === "") {
      return;
    }
    if (!user) {
      throw new Error("Você deverá estar logado para finalizar esta ação.");
    }
    const post = {
      content: newPost,
      author: {
        name: user.name,
        avatar: user.avatar,
        uid: user.id,
      },
    };
    const dbPost = ref(database, `build-box/posts`);
    const newPostInDB = push(dbPost);
    await set(newPostInDB, post);
    setNewPost("");
    alert("Post Criado Com Sucesso!");
  }

  return (
    <PageBuildBox>
      <Header>
        <img src={logoImg} alt="Logo BuildBox" onClick={() => navigate("/")} />
      </Header>
      <MainContent>
        <MainCreatePost>
          <main>
            <form onSubmit={handleCreateNewPost}>
              {!user ? (
                <PhotoUploadImg src={photoUpload} alt="Avatar do Usuário" />
              ) : (
                <UserAvatarImg src={user?.avatar} alt="Avatar do Usuário" />
              )}
              <InputName
                type="name"
                placeholder={user?.name}
                required
                readOnly
              />

              <TextAreaPost
                placeholder="Mensagem"
                required
                onChange={(event) => setNewPost(event.target.value)}
                value={newPost}
              />
              <CreatePostButtonDiv>
                <DiscardButton onClick={() => setNewPost("")}>
                  Descartar
                </DiscardButton>
                <PublishButton
                  type="submit"
                  className="main-create-post-button-2"
                  disabled={!user}
                >
                  Publicar
                </PublishButton>
              </CreatePostButtonDiv>
            </form>
          </main>
        </MainCreatePost>
        <DivSpan>
          <span>Feed</span>
        </DivSpan>
        {createPost.map((post) => {
          return (
            <Posts
              content={post.content}
              author={post.author}
              key={post.id}
              _id={post.id}
            />
          );
        })}
      </MainContent>
    </PageBuildBox>
  );
}
