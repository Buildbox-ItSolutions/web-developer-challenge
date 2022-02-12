import './App.css';
import logo from './img/bx-logo.png';
import upload from './img/photo-upload.png';
import base from './img/photo-base.png';
import base2 from './img/photo-base2.png';
import base3 from './img/photo-base3.png';
import image from './img/image.png';
import del from './img/delete.png'

function App() {
  return (
    <div className="App">
      <div className="header">
          <img src={logo} alt="" ></img>
        </div>
        <div className="Main">
        <div className="---Painel-Buildbox-Teste">
        <div className="retangulo">
        <div className="Retngulo-1">
        <div className="image">
        
        <img src={upload} className="upload" alt=""/>
        <img src={image} className="image" alt="" />
        </div>
        <input type="text" className="Retngulo-10" placeholder="Digite seu nome"></input>
        <input type="text" className="Retngulo-11" placeholder="Mensagem"></input>  
        <div className="button">
          <span className="Descartar">
            Descartar
          </span>
        <input type="submit" value="Publicar" className="Retngulo-12"></input>
        </div>
        </div>
        </div>
        <div className="texto">
        <span className="Feed">
          Feed
        </span>
        </div> 
        <div className="cards">
          <div className="card">
            <img src={base} className="photo-base" alt=''/>
            <span className="Lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.
            </span>
            <img src={del} className="delete" alt=''/>
            <p class="enviado">
              Enviado por
            </p>
            <p class="usuario">
              Matheus Marques
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img src={base2} className="photo-base" alt=''/>
            <span className="Lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.
            </span>
            <img src={del} className="delete" alt=''/>
            <p class="enviado">
              Enviado por
            </p>
            <p class="usuario">
              Matheus Marques
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="card2">
            <img src={base3} className="photo-base" alt=''/>
            <span className="Lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit
            </span>
            <img src={del} className="delete" alt=''/>
            <p class="enviado">
              Enviado por
            </p>
            <p class="usuario">
              Matheus Marques
            </p>
          </div>
        </div>
        </div>      
        </div>     
        </div>
  );
}

export default App;
