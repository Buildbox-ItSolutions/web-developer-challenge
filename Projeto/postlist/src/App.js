import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './imgs/bx-logo.png';
import iconImg from './imgs/image.png'
function App() {
  return (
    <div className="App ">
      <header className="App-header d-flex justify-content-center">
        <div className='img-container d-flex align-items-center'>
          <img src={logo} alt='' class="bx-logo " />
        </div>

      </header>

      <div class=" d-flex justify-content-center  py-5 ">
        <div class="inputPost container-fluid mx-5">
          
          <div class='p-2 text-center container-fluid'>
            <input id="select-img" type="file" ></input>
            <label class='labelImg ' for="select-img">
              <img class="inputImage" src={iconImg} alt="" />
            </label>
          </div>

          <div class='p-2'>
            <input class='inputs inputName' type="text" placeholder=" Digite seu nome" ></input>
          </div>

          <div class='p-2'>
          <textarea class='inputs inputMessage' type="text" placeholder=" Mensagem" ></textarea>
          </div>

          <div class='p-2 d-grid gap-2 d-md-flex justify-content-md-end '>
          <button type="button" class="btn btn-link text-muted ">Descartar</button>
          <button type="button" class="btn btn-outline-secondary ">Publicar</button>
          </div>

        </div>
      </div>

      <div class="d-flex justify-content-center py-5">
        <div class="postPanel ">

        </div>
      </div>
    </div>
  );
}

export default App;
