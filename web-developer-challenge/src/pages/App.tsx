import { useEffect, useRef, useState } from "react";
import Feed from "../components/Feed"; 
import Menu from "../components/Menu";
import GlobalStyle from '../styles/global'
import { ButtonDiscard, ButtonPublic, Main, NewPulication, PublishedImage, ContainerublishedImage, ButtonDeletedImage } from '../styles/styles';
  
interface FeedDataForm {
  id: number,
  name: string,
  text: string, 
};

export interface FeedDataPublication {
  id: number,
  name: string,
  text: string,
  image: string,
};

function App() { 

  /* IMAGE DATA */
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>()
  const [preview, setPreview] = useState<string | undefined>()

  /* DATA PUBLICATIONS */
  const [publicationsData, setPublicationsData] = useState<Array<FeedDataPublication>>([])

  /* RENDER IMAGE */
  useEffect(()=>{
  if(image){
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(image)
  } else {
    setPreview(undefined)
  }

  }, [image]);
    

  /* FORM DATA */
  const [dataForm, setDataForm] = useState<FeedDataForm>({id: 0, name: '', text: ''});

  function handleDataForm(value: any){
      setDataForm( (data): any => {
        return ( {...data, "id": (Math.random()*(0-10)+10).toFixed(5), [value.target.name]: value.target.value,})
      }) 
  };

  /* ADDITION NEW PUBLICATION */
  function additionNewPublication(){ 
    if(dataForm.id !== 0 && preview !== '' && preview !== undefined && dataForm.name !== '' && dataForm.text !== ''){
      const newPublication = [
        ...publicationsData,
        {
          id: dataForm.id,
          image: preview,
          name: dataForm.name,
          text: dataForm.text,
        },
      ]
      setImage(undefined)
      setDataForm({id: 0, name: '', text: ''})
      setPublicationsData(newPublication)
    }
  };

  /* DELETED PUBLICATION */
  function deletedPublication(idPublication: number){
    const newPublicationsData = publicationsData.filter( publication => publication.id !== idPublication)
    setPublicationsData(newPublicationsData)
  };

  /* CLEAR FORM PUBLICATION */
  function clearFormPublication(){
    setDataForm({id: 0, name: '', text: ''})
    setPreview('')
  };
 
  /* VERIFICATION BUTTON */
  function verificationButtonPublication(){
    if(dataForm.id === 0 || preview === '' || preview === undefined || dataForm.name === '' || dataForm.text === ''){
      return false
    } else { return true }
  } 

  return (
    <>
    <GlobalStyle/>
    <Menu/>
    <Main>

    <NewPulication>
      {/* DISPLAY IMAGE */}
      <ContainerublishedImage>
        {preview ? (
          <>
            <PublishedImage addPhoto={true} src={preview} alt="foto" />
            <ButtonDeletedImage onClick={()=>setImage(undefined)}/>
          </>
        )
        :
        (<PublishedImage addPhoto={false} src="/img/image.svg" alt="foto publicação" onClick={
          (event) => { event.preventDefault()
            fileInputRef?.current?.click()
          }} />)}
          
      </ContainerublishedImage>
      <input type="file" name="photo" id="photoPublication" ref={fileInputRef} accept="image/*" style={{display: 'none'}} onChange={
        (event: any) => {
          let file = event.target.files[0]
 
          if(file && file.type.substr(0,5) === "image"){
            setImage(file)
          } else { setImage(undefined); }
          event.target.value = '' 
          
        }
      } />
      
      <input type="text" placeholder="Nome" name="name" value={dataForm.name} onChange={handleDataForm}/>
      <textarea placeholder="Mensagem" name="text" value={dataForm.text} onChange={handleDataForm} ></textarea>
      <span>

        <ButtonDiscard onClick={()=>clearFormPublication()}>Descartar</ButtonDiscard>
        <ButtonPublic activeButtonPublic={verificationButtonPublication()} 
        onClick={()=>additionNewPublication()}>Publicar</ButtonPublic>

      </span>
    </NewPulication>

    <p>Feed</p> 
    {publicationsData.length !== 0 ? 
    (publicationsData.map( (data, index) => {
      return(<Feed dataPublication={data} deletedPublication={deletedPublication} key={index} />)
    }))
     : 
    (<h2>Nenhuma postagem</h2>)}

    </Main>
    </>
  );
};

export default App;
 