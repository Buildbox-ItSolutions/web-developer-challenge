import React, { ChangeEvent, FormEvent, useState } from "react";

import "../styles/pages/main.css";

import btnX from "../assets/delete.svg";

import btnLogo from "../assets/btn-upload.svg";

interface Post {
  image: string;
  name: string;
  message: string;
}

export default function Main() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [alerts, setAlerts] = useState<string[]>();

  function validator() {
    let alertMessage = [];
    let validForm = true;

    if (name.length === 0) {
      validForm = false;
      alertMessage.push("Informe seu nome.");
    }

    if (message.length === 0) {
      validForm = false;
      alertMessage.push("Informe uma mensagem.");
    }

    if (image.length === 0) {
      validForm = false;
      alertMessage.push("Selecione uma imagem.");
    }

    setAlerts(alertMessage);
    return validForm;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (validator()) {
      const data = { name, message, image };
      setPosts([...posts, data]);
      clearForms();
    }
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  function handleRemovePost(index: number) {
    let postList = [...posts];
    postList.splice(index, 1);
    setPosts(postList);
  }

  function clearForms() {
    setName("");
    setImage("");
    setMessage("");
  }

  return (
    <>
      <div id="page">
        <main>
          <form onSubmit={handleSubmit} className="mainForm">
            <div className="uploadBtn">
              <label htmlFor="image" className="uploadBtn">
                {image ? (
                  <img className="uploadPrev" src={image} alt="uploaded" />
                ) : (
                  <img src={btnLogo}></img>
                )}
              </label>
              <input onChange={handleSelectImages} type="file" id="image" />
            </div>

            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
            <textarea
              id="message"
              placeholder="Mensagem"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
            <div className="formButtons">
              <button type="button" onClick={clearForms}>
                Descartar
              </button>
              <button type="submit" className="active">
                Publicar
              </button>
            </div>
          </form>

          <div className="post-container">
            {posts.length ? <p className="content-title">Feed</p> : ""}

            {posts.map((post, index) => {
              return (
                <div key={index} className="postList">
                  <div className="btnExclude">
                    <span onClick={() => handleRemovePost(index)}>
                      <img src={btnX}></img>
                    </span>
                  </div>
                  <div className="post-content">
                    <div className="avatar">
                      <span>
                        <img
                          className="uploadPrev"
                          src={post.image}
                          alt="uploaded"
                        />
                      </span>
                    </div>
                    <div className="post-info">
                      <p className="post-text">{post.message}</p>
                      <p className="post-send-by-text">Enviado por</p>
                      <p className="post-send-by">{post.name}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
      {(alerts !== undefined && alerts.length > 0) && (
        <div className="alert-container">
          <div className="alert-content">
            <div className="btnClose">
              <span onClick={() => setAlerts([])}>
                <img src={btnX}></img>
              </span>
            </div>
            {alerts.map((message) => (
              <p key={message}>{message}</p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
