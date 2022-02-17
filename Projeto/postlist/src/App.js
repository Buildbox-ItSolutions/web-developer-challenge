import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './imgs/bx-logo.png';
import iconImg from './imgs/image.png'
import iconImg2 from './imgs/image@2x.png'
import iconImg3 from './imgs/image@3x.png'
function App() {

  

  function imprimir() {

    const feed = document.querySelector('#feed')
    const div1 = document.createElement('div')
    div1.classList.add("mx-5")
    div1.setAttribute("id","excluir")
    const div2 = document.createElement('div')
    div2.classList.add("postPanel", "d-flex","flex-wrap")
    
    const div3 = document.createElement('div')
    div3.classList.add("p-1", "m-1","container-fluid")
    const label = document.createElement('label')
    label.classList.add("fotoPost")
    const img = document.createElement('img')
    img.classList.add("ImagemPost")
    img.setAttribute("src", "...")
    img.setAttribute("alt", "...")
    label.appendChild(img)
    div3.appendChild(label)
    div2.appendChild(div3)

    const div4 = document.createElement('div')
    div4.classList.add("px-md-5","px-0", "pt-3", "m-0", "container-fluid")
    const p1 = document.createElement('p')
    p1.setAttribute("id", "mensagem")
    const div5 = document.createElement('div')
    div5.classList.add("autor", "pt-3")
    const p2 = document.createElement('p')
    p2.classList.add("subText", "my-0")
    p2.innerHTML = "Enviado por"
    const p3 = document.createElement('p')
    p3.setAttribute("id", "nome")

    div5.appendChild(p2)
    div5.appendChild(p3)
    div4.appendChild(p1)
    div4.appendChild(div5)
    div2.appendChild(div4)
    div1.appendChild(div2)
    feed.appendChild(div1)

    const div6 = document.createElement('div')
    div6.classList.add("flex-grow-1", "position-relative", "top-0", "end-0")
    const botaoDelete = document.createElement('button')
    botaoDelete.classList.add("btn-close", "btn-close-white", "me-2", "m-auto", "position-absolute", "top-0", "end-0")
    botaoDelete.setAttribute('aria-label', 'Close')
    botaoDelete.setAttribute('onClick', `${apagar}`)
    botaoDelete.setAttribute('type', 'button')
    div6.appendChild(botaoDelete)
    div2.appendChild(div6)


    /* imagem*/
    
    mudarFoto(img)
    /* nome */
    var inputNome = document.querySelector('#inputName').value
    
    p3.innerHTML = inputNome
    /* Mensagem */
    var inputMensagem = document.querySelector('#inputMessage').value
    
    p1.innerHTML = inputMensagem

    limpar()
  }

  function limpar() {
    var foto = document.querySelector('#inputImage')
    var preview = document.querySelector('.formImage')
    var nome = document.querySelector('#inputName')
    var mensagem = document.querySelector('#inputMessage')
    var labelImg = document.querySelector('#labelPreview')
    nome.value = ''
    mensagem.value = ''
    foto.value = ''
    labelImg.removeAttribute('class')
    labelImg.setAttribute('class', 'preLabelImg')
    preview.setAttribute('src', iconImg)

    apagar()
  }

  function mudarFoto(local) {
    var inputImage = document.querySelector('#inputImage').files[0]

    var reader = new FileReader()

    reader.onloadend = function () {
      local.src = reader.result;
    }
    if (inputImage) {
      reader.readAsDataURL(inputImage);
    } else {
      local.src = "";
    }
  }

  
  function apagar(){
    
    var app = document.querySelector('#feed')
    
    app.addEventListener('click', function bora(e) {
      var objeto = e.target.parentNode.parentNode.parentNode
      if(objeto.id === "excluir"){
        objeto.remove()

      }
    }) 
  }

  function previewFoto() {

    var preview = document.querySelector('.formImage')
    var inputImage = document.querySelector('#inputImage')
    var labelImg = document.querySelector('#labelPreview')
    labelImg.removeAttribute('class')
    labelImg.setAttribute('class', 'posLabelImg')
    preview.removeAttribute('srcset')

    inputImage.addEventListener('input', mudarFoto(preview))
  }

  return (
    <div className="App ">

      <header className="App-header d-flex justify-content-center">
        <div className='img-container d-flex align-items-center'>
          <img src={logo} alt='' className="bx-logo " />
        </div>

      </header>

      <div className=" d-flex justify-content-center  py-5 ">

        <div className="inputPost container-fluid mx-5">


          <div className='p-2 text-center container-fluid'>
            <input id="inputImage" onChange={previewFoto} type="file" ></input>
            <label id="labelPreview" className='preLabelImg ' htmlFor="inputImage">
              <img className="formImage" src={iconImg} srcset={`${iconImg2} 2x, ${iconImg3} 3x`} alt="" />
            </label>
          </div>

          <div className='p-2'>
            <input id='inputName' className='inputs inputName' type="text" placeholder=" Digite seu nome" ></input>
          </div>

          <div className='p-2'>
            <textarea id='inputMessage' className='inputs inputMessage' type="text" placeholder=" Mensagem" ></textarea>
          </div>

          <div className='p-2 d-grid gap-2 d-md-flex justify-content-md-end '>
            <button type="button" onClick={limpar} className="btn btn-link text-muted ">Descartar</button>
            <button type="submit" value="Submit" onClick={imprimir} className="btn btn-outline-success ">Publicar</button>
          </div>
        </div>
      </div>
      <div id='feed' className='pb-5'>
        <h6 className='text-white px-5'>Feed</h6>
        
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
