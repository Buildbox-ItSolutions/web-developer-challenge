import React,{ useState } from 'react';
import * as S from './styles/stylesapp'
import LogoIMG from './assets/bx-logo.svg'
import Post from './components/Post';
import Image from './assets/image.svg'



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
      const filteredArray = post.filter((item) => item.id !== id)

      setPost(filteredArray) 
      console.log(id)
    }

  return (
    <div className="App">
      <S.Header>
        <img src={LogoIMG} alt="Logo"  />
      </S.Header>
      <S.Main>
        <S.Publish>
          <S.FormCamp>
            <S.ImageUpload>
              <label>
                <img src={Image} alt="Picture" className="PictureIMG" />
              </label>
              <input
                id= 'file-input'
                type= 'file'
              />
            </S.ImageUpload>
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
            <S.ButtonsBackground>
              <div></div>
              <div>
                <button
                  onClick={Reset}
                  className="DescartButton"
                >
                Descartar</button>
                <button
                  onClick={() => publish(name,description,  id)}
                  className="PublishButton" 
                >
                Publicar</button>
              </div>
            </S.ButtonsBackground>
          </S.FormCamp>
        </S.Publish>
      </S.Main>
      <S.Section>
        <h3>Feed</h3>
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
      </S.Section>
    </div>
  );
}

export default App;
