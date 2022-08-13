import { useState } from "react";
import { Feed, styles, ViewForm } from "../styles";
import { Post } from "../types";
import { initList } from "../utils";
import PostRender from "./post-render";
import Upload from "./upload";

function FormPost():JSX.Element {

  const [randomPost, setRandomPost] = useState<Post>({sent:""});
  const [text, setText] = useState<string>("");
  const [postList, setPostList] = useState<Array<Post>>(initList);
  const [reload, setReload] = useState(false);

  function add(){
    let erro = "";
    if(!text) erro = "Digite uma mensagem!";
    if(!randomPost.sent) erro = "Selecione uma foto!";
    if(erro){
      alert(erro);
      return;
    };
    let newList = postList;
    const { userId, sent } = randomPost;
    newList.unshift({"userId":userId, "sent":sent, "text":text });
    setPostList(newList);
    setReload(!reload);
    clearBtn();
  };

  function remove(indexRemove:number){
    const newList = postList.filter((i:any, index:number) => index !== indexRemove);
    setPostList(newList);
  };

  const clearBtn = () => {
    setRandomPost({sent:""});
    setText("");
    const textF = document.getElementById("text") as HTMLInputElement;
    textF.value = "";
  }
  
  return (
    <>
      <ViewForm>
        <Upload setRandomPost={setRandomPost} randomPost={randomPost} />
        <input style={styles.input} type="text" value={randomPost.sent}
          placeholder="Digite o nome" readOnly/>
        <textarea onChange={e => setText(e.target.value)} style={styles.textArea} 
          placeholder="Mensagem" rows={3} id="text"></textarea>
        <button style={styles.cancel} onClick={clearBtn} > 
          Descartar 
        </button>
        <button style={styles.submit} onClick={add} >
          Publicar
        </button>
      </ViewForm>

      <Feed>Feed</Feed>
      <PostRender list={postList} remove={remove} reload={reload} />
    </>
  )
}

export default FormPost;