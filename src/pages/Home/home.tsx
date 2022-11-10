import React, { useEffect, useState } from "react";
import styled from "@emotion/styled"

import logo from '../../assets/img/logo.png';
import photo from '../../assets/img/photo.png';
import deleta from '../../assets/img/delete.png';
import user from '../../assets/img/user.png';

export const Home = () => {
  const { Container,Input,Button,Textarea,Fundo,Feed,EnviadoPor,Delete,Photo,TextoFeed,DivButtons,Rodape,Nome,Mensagem } = Home
 
const [menus, setMenus ] = useState<{
  message: string,
  imagem: string,
  name: string,
}[]>()
console.log(menus) 

useEffect(() => {
  const temp = []

  temp.push({
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
    image: user,
    name: 'Manuela Oliveira',
  })
  temp.push({
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla mattis ligula vel velit scelerisque iaculis.',
    image: photo,
    name: 'Manuela Oliveira',
  })

  setMenus(temp)
  
},[])

  return (
    <>
<Container>

<Fundo>
<img style={{ marginTop:20,objectFit: 'contain'}} src={photo} />
<Input placeholder="Digite seu nome"/>

<Textarea  placeholder="Mensagem"/>

<DivButtons>
<Button style={{ textDecoration:'underline'}}>Descartar</Button>
<Button style={{ backgroundColor:'#494949' ,color:'#313131'}}>Publicar</Button>
</DivButtons>

</Fundo>

<TextoFeed ><a>Feed</a></TextoFeed>

{
  menus?.map((menu:any,key:any) => (

<Fundo key={key} style={{height:'30%',marginTop:10,flexDirection:'column'}}>

<Delete>
  <img src={deleta} style={{objectFit: 'contain'}}/>
</Delete>

<Feed>

  <Photo>
<img src={menu.image} style={{objectFit: 'contain'}}/>
</Photo>

<div style={{flexDirection:'column',display:'flex'}}>
<Mensagem>{menu.message}</Mensagem>
<EnviadoPor>Enviado por</EnviadoPor>
<Nome>{menu.name}</Nome>
</div>
</Feed>

</Fundo>
  ))
}

<Rodape>
</Rodape>





  </Container>

  </>
  )
}
Home.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
  background-color: #343434;
  /* margin-top: 50px; //arrumar */
  /* overflow-y: scroll; */
`
Home.Input = styled.input`
  background-color: #494949;
  color: #9f9f9f;
  border-width: 0px;
  border-radius: 8px;
  width: 90%;
  /* width: 468px; */
  height: 40px;
  margin-top: 10px;
  padding-left: 10px
`
Home.Textarea = styled.textarea`
  background-color: #494949;
  color: #9f9f9f;
  border-width: 0px;
  border-radius: 8px;
  /* width: 468px; */
  width: 90%;
  height: 100px;
  margin-top: 10px;
  padding-left: 10px
`
Home.Fundo = styled.div`
  background-color: #313131;
  width: 40%;
  min-width: 450px;
  border-width: 1px;
  border-color:#3b3b3b;
  margin-top: 30px;
  height: 78%;
  border-style:solid;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`
Home.Button = styled.button`
  background-color: #313131;
  color:#5f5f5f;
  border-width: 0px;
  border-radius: 8px;
  width: 20%;
  min-width: 80px;
  height: 40px;
  cursor: pointer;
`
Home.Feed = styled.div`
  flex-direction: row;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 30px;
`
Home.EnviadoPor = styled.text`
  padding-left: 25px;
  margin-top: 20px;
  color:#5f5f5f;
  font-size: 10px;
`
Home.Delete = styled.div`
  width:95%;
  margin-top: 5px;
  justify-content: flex-end;
  display: flex;
  cursor: pointer;
` 
Home.Photo = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
`
Home.TextoFeed = styled.div`
  width: 40%;
  min-width: 450px;
  margin-top: 50px;
`
Home.DivButtons = styled.div`
  width: 90%;
  height: 50px;
  margin-top: 20px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding-left: 20px;
`
Home.Rodape = styled.div`
  height: 100px;
`
Home.Nome = styled.text`
  padding-left:25px;
  color: #7a7a7a
` 
Home.Mensagem = styled.text`
  padding-left:25px;
  width: 350px;
`