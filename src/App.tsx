  import React,{ useState } from 'react';
  import './styles/App.css'
  import LogoIMG from './assets/icons/bx-logo.svg'
  import Post from './components/Post';
  import Picture from './images/galeria.svg'
  import AlertImg from  './utils/AlertFunction'

  interface IPost{
    name?: string;
    desc?: string;
    id: number
  }
  const App = () => {
    const [post, setPost] = useState<IPost[]>([])
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [id, setId] = useState<number>(0)

      function publish(nome: string, descricao: string, id: number){
        setId(id + 1)
        setPost([...post,{name: nome,desc: descricao, id}])
      } 

      function Reset() {
        setName('')
        setDescription('')
      }
          
      function onDelete(id: number) {
        // filtra os posts, trazendo só os posts que não tiverem o id passado
        const filteredArray = post.filter((item) => item.id !== id)

        setPost(filteredArray) // atualiza com todos os posts menos o excluido
        console.log(id)
      }

    return (
      <div className="App">
        <header  >
          <img src={LogoIMG} alt="Logo"  />
        </header>
        <main className="Main" >
          <div className="publish" >
              <div className="formCamp" >
                    <img src={Picture} alt="Picture" className="PictureIMG" onClick={AlertImg} />
                      <input 
                        placeholder="  Nome" 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    <textarea
                      placeholder='  Mensagem'
                      id="MessageInput" 
                      maxLength={81}  
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    />
                  <div className="buttonsBackground" >
                    <div></div>
                    <div>
                      <button
                        onClick={Reset}
                        className="DescartButton" 
                      >Descartar</button>
                      <button 
                        onClick={() => publish(name,description,  id)} 
                        className="PublishButton" >
                        Publicar</button>
                    </div>
                  </div>
              </div>
          </div>
        </main>

        <section className="section" >
          {
            post && post.map((data, i) => (
              <Post 
              key={i} 
              name={String(data.name)} 
              description={String(data.desc)} 
              onDelete={onDelete}
              postId={data.id}
              />
            ))
          }
        </section>
      </div>
    );
  }

  export default App;
