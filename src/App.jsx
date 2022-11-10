import { useEffect, useRef, useState } from "react"

import Header from "./Components/Header"
import Button from "./Components/Button"
import Card from "./Components/Card"

import trash from "./assets/trash.svg"

import "./App.css"

function App() {
  const Inputfile = useRef()
  const img = useRef()
  const foto = useRef()

  const inputNome = useRef()
  const texto = useRef()

  const [imagem, setImagem] = useState()
  const [nome, setNome] = useState()
  const [mensagem, setMensagem] = useState()
  const [dados, setDados] = useState([])

  const pegarImagem = (e) => {
    e.preventDefault()

    const value = e.target

    const files = value.files

    const fr = new FileReader()

    fr.onload = () => {
      img.current.src = fr.result

      const imagem = fr.result
      setImagem(imagem)
    }

    fr.readAsDataURL(files[0])


    Inputfile.current.classList.add('esconder')
    foto.current.classList.add('mostraFoto')
  }

  const excluirFoto = () => {
    img.current.src = ''
    inputNome.current.innerHTML = ''
    texto.current.innerHTML = ''

    Inputfile.current.classList.remove('esconder')
    foto.current.classList.remove('mostraFoto')
  }

  const publicar = () => {
    let id = Math.floor(Date.now() * Math.random()).toString(36)

    const novaPublicação = {
      id: id,
      imagem: imagem,
      nome: nome,
      mensagem: mensagem
    }

    setDados(prevState => [...prevState, novaPublicação])

    excluirFoto()
  }

  const deletaPost = () => {
    dados.forEach((data, index) => {
      setDados(dados.slice(data, index)) // os cards estão sendo apagados de baixo pra cima! Infelimente não conseguir encontrar uma forma de poder apagar o card especifico.
    })
  }

  return (
      <>
        <Header />
        
          <section id="dados">
            <form>
              <div id="imagem">
                <input
                    className="inputImagem"
                    ref={Inputfile}
                    type="file"
                    id="imagem"
                    onChange={pegarImagem}
                />

                <div ref={foto} id="editarImagem">
                  <img ref={img} src="" alt="foto de perfil" />

                  <button className="trash" onClick={excluirFoto}>
                    <img src={trash} alt="botão para excluir imagem" />
                  </button>
                </div>
              </div>

              <div id="inputNome">
                <input
                  ref={inputNome}
                  type="text" 
                  placeholder="Nome e Sobrenome" 
                  onChange={e => setNome(e.target.value)}
                />
              </div>

              <div id="mensagem">
                <textarea ref={texto} rows="4" onChange={e => setMensagem(e.target.value)}></textarea>
              </div>

              <div className="buttons">
                <Button
                  type="reset"
                  value="Descartar"
                  idName="descartar"
                  handleClick={excluirFoto}
                />
                
                <Button
                  type="reset"
                  value="Publicar"
                  idName="publicar"
                  handleClick={publicar}
                />
              </div>
            </form>
          </section>

          <section className="feed">
            <span id="feed">Feed</span>

            {
              dados.map(dados => (
                <Card 
                  key={dados.id}
                  img={dados.imagem}
                  nome={dados.nome}
                  mensagem={dados.mensagem}
                  handleClick={deletaPost}
                />
              ))
            }
          </section>
      </>
  )
}

export default App