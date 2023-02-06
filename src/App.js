import React, { useState, useEffect } from "react";
import "./App.css"
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from "react-modal"

function App() {
  const [posts, setPosts] = useState([{
    id: 1, nome: 'Breno Barbosa Costa', mensagem: 'Coloquei algumas funcionalidades a mais do que as pedidas no desafio, um modal é aberto ao tentar deletar um post para que você confirme a exclusão do mesmo, fiz com que o header suma ao scrollar para baixo e apareça ao scrollar para cima para demonstrar uso do UseEffect e adicionei um footer para retornar ao topo, tentei não exagerar muito ao acrescentar coisas, para não atrapalhar a avaliação de vocês, obrigado desde já.', imagem: 'https://thumbs.dreamstime.com/z/avatar-masculino-do-perfil-com-cabelo-marrom-81931493.jpg'
  },
  { id: 2, nome: 'Manuela Oliveira', mensagem: 'Lorem ipsum dolor sit amet. Qui doloribus perspiciatis sed modi.', imagem: 'https://st2.depositphotos.com/2703645/11327/v/950/depositphotos_113271646-stock-illustration-female-avatar-icon.jpg' },]);
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [imagem, setImagem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postToRemove, setPostToRemove] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollTop && showHeader) {
        setShowHeader(false);
      } else if (currentScroll < lastScrollTop && !showHeader) {
        setShowHeader(true);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showHeader, lastScrollTop]);

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setPosts([...posts, { nome, mensagem, imagem }]);
    setNome("");
    setMensagem("");
    setImagem(null);
  };
  const handleDiscard = () => {
    setNome("");
    setMensagem("");
    setImagem(null);
  };

  const handleFileChange = event => {
    setImagem(URL.createObjectURL(event.target.files[0]));
    document.getElementById("changeimg").value = ""
  };
  const handleRemovePost = index => {
    setModalIsOpen(true);
    setPostToRemove(index);
  };

  const confirmRemovePost = () => {
    setModalIsOpen(false);
    const newPosts = [...posts];
    newPosts.splice(postToRemove, 1);
    setPosts(newPosts);
    setPostToRemove(null);
  };

  const cancelRemovePost = () => {
    setModalIsOpen(false);
    setPostToRemove(null);
  };


  const isValid = nome !== "" && mensagem !== "" && imagem !== null;

  return (
    <div className="container">
      <header style={{ display: showHeader ? "block" : "none" }} className="container-header">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <h1>buildbox</h1>
        <h3 className="h3-webchallenge">WEB CHALLENGE</h3>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        {imagem ? (
          <div className="auto-flex">
            <img alt="Carregando"  className="img-selected" src={imagem} />
            <DeleteIcon className="delete-color" onClick={() => setImagem(null)} />

          </div>
        ) : (

          <label for="changeimg" onClick={handleFileChange} class="btn-labelimg">Foto</label>
        )}
        <input className="input-file" type="file" onChange={handleFileChange} id="changeimg" hidden />
        <input
          className="input-nome"
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <textarea
          className="input-mensagem"
          placeholder="Mensagem"
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
        />
        <div className="auto-flex">
          <a onClick={handleDiscard} className="discard-button">Descartar</a>
          <button className="submit-button" type="submit" disabled={!isValid}>Publicar</button>
        </div>

      </form>

      <h3 className="h3-feed">Feed</h3>

      {posts.map((post, index) => (

        <div className="post" key={index}>
          <div className="img-msgalign">
            <div className="div-span">
              <img alt="Carregando" className="post-imagem" src={post.imagem} />
              <p className="post-mensagem">{post.mensagem}</p>
            </div>
            <div className="sent-name">
              <span className="span-enviado">Enviado por</span>
              <p className="post-nome">

                {post.nome}</p>
            </div>
          </div>
          <button className="remove-button" onClick={() => handleRemovePost(index)}>X</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={cancelRemovePost}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.400)',
              },
              content: {
                width: "30%",
                height: "25%",
                margin: "auto",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#757575",
                color: "white",
                // fontFamily:"Roboto"
              }
            }
            }
          >
            <h2>Deletar</h2>
            <p>Tem certeza que deseja excluir esse post?</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button className="button-confirma" onClick={confirmRemovePost}>Sim</button>
              <button className="button-rejeita" onClick={cancelRemovePost}>Não</button>
            </div>
          </Modal>

        </div>
      ))
      }
      <footer> <button className="button-backtotop" onClick={handleGoTop}>Clique aqui para voltar ao topo</button></footer>
      {/* Developed by Breno Barbosa Costa */}
    </div >

  );
}

export default App;
