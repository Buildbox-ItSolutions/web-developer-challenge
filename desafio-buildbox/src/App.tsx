import * as C from "./App.styles";
import { useState } from "react";

import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";

import { iPosters } from "./types/Posters";

function App() {
  const [newPost, setNewPost] = useState<any>({});
  const [posts, setPosts] = useState<iPosters[]>([
    {
      id: 0,
      avatar: require("./assets/images/photo-base3.png"),
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel arcu sodales, pellentesque massa et, ullamcorper nisl. ",
      userName: "Matheus Lima",
    },
    {
      id: 1,
      avatar: require("./assets/images/photo-base2.png"),
      text: "Etiam sollicitudin felis eget ipsum placerat elementum. Donec vitae risus ut justo accumsan commodo. Nulla facilisi. In hac habitasse platea dictumst. Vestibulum rhoncus nisl quis dolor dignissim varius.",
      userName: "Maria Eduarda",
    },
  ]);

  const createNewPost = () => {
    const post: iPosters = {
      id: posts.length + 1,
      avatar: require("./assets/images/photo-base.png"),
      text: "Nunc sed massa sem. Nulla vel lectus finibus neque interdum condimentum eget et lacus. Integer iaculis purus at tellus egestas, eu pharetra erat scelerisque.",
      userName: "Maria Oliveira",
    };

    setNewPost(post);
  };

  const handleAdd = () => {
    setPosts([newPost, ...posts]);
    setNewPost({});
  };

  const handleDeletePost = (listPosts: iPosters[], post: iPosters) => {
    const newList = listPosts.filter((item) => {
      return item.id !== post.id;
    });

    setPosts(newList);
  };

  return (
    <C.Container>
      <Header />
      <C.Area>
        <C.AddPostArea>
          <C.Avatar
            onClick={createNewPost}
            src={newPost?.avatar ?? require("./assets/images/photo-upload.png")}
          />
          <C.InputArea>
            <C.InputName
              defaultValue={newPost?.userName}
              placeholder="Digite seu nome"
              onClick={createNewPost}
            />
            <C.InputMsg
              rows={3}
              defaultValue={newPost?.text ?? ""}
              spellCheck={false}
              placeholder="Mensagem"
              onClick={createNewPost}
            />
          </C.InputArea>

          <C.BtnArea>
            <C.DiscardBtn
              isActive={newPost?.text}
              onClick={() => setNewPost({})}
            >
              Descartar
            </C.DiscardBtn>
            <C.AddBtn onClick={handleAdd} isActive={newPost?.text}>
              Publicar
            </C.AddBtn>
          </C.BtnArea>
        </C.AddPostArea>

        <C.TextFeed>Feed</C.TextFeed>

        {posts.length !== 0 ? (
          <C.FeedArea>
            {posts.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  data={item}
                  delPost={() => handleDeletePost(posts, item)}
                />
              );
            })}
          </C.FeedArea>
        ) : (
          <C.EmptyArea>Nenhuma postagem no momento para exibir!</C.EmptyArea>
        )}
      </C.Area>
    </C.Container>
  );
}

export default App;
