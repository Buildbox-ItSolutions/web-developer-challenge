import React, {Component} from "react";

import { FaFileImage, FaTrash } from "react-icons/fa";
import Feed from "./Feed";

import './MainBody.css';

class Mainbody extends Component {
  state = {
    postData: [
      {
        img: "image1",
        imageload: true,
        nome: "Daniel",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        img: "image2",
        imageload: true,
        nome: "Ace",
        text: "Duis justo risus, suscipit quis metus ac, tincidunt gravida ipsum."
      },
      {
        img: "image3",
        imageload: true,
        nome: "Luf",
        text: "Aenean at ante erat. Cras malesuada erat nisl, nec tincidunt nisl sagittis a."
      }
    ],
    nameform: "",
    textform: "",
    imageurl: "",
    imageload: false,
  }


  getRandomImage = () =>{
    if (!this.state.imageload){
      this.setState({
        imageurl: "image" + (Math.floor(Math.random() * 3) + 1),
        imageload: !this.state.imageload
      });
    }
  }

  discardImage = () =>{
    this.setState({
      imageload: false,
      imageurl: ""
    });
  }

  cleanForm = () => {
    this.setState({
      nameform: "", 
      textform: "",
      imageload: false,
      imageurl: ""
    });
  }

  sendForm = () => {
    let post = {
      img: this.state.imageurl,
      imageload: this.state.imageload,
      nome: this.state.nameform ? this.state.nameform : "Desconhecido",
      text: this.state.textform ? this.state.textform : "Nenhuma mensagem foi enviada"
    }
    this.setState(previousState => ({
      postData: [...previousState.postData, post],
      nameform: "",
      textform: "",
      imageload: !this.state.imageload,
      imageurl: ""
    }));
  }

  render(){
  return(
    <div className="mainbody">
      <div className="writecard">
        <div className="imageDiv">
          <div className={this.state.imageload ? "imageCardBorderless" : "imageCard"}
            onClick={() => this.getRandomImage()}>
            {this.state.imageload ?
                <img src={require('../assets/' + this.state.imageurl + '.jpg')} alt="imagerender" />
              :
                <FaFileImage className="imagelogo" />
            }
          </div>
          {this.state.imageload ?
              <FaTrash className="discardIcon" onClick={this.discardImage} />
            :
              null
          }
        </div>

        <input
            className="inputName"
            type="text"
            placeholder="Digite seu nome"
            value={this.state.nameform}
            onChange={event => {this.setState({nameform: event.target.value})}}
         />

         <textarea 
            className="inputText"
            typ="text"
            placeholder="Mensagem"
            value={this.state.textform}
            onChange={event => {this.setState({textform: event.target.value})}}
          />

         <div className="buttonDiv">
          <button className="discardButton" onClick={this.cleanForm}>Descartar</button>
          <button 
            className={this.state.imageload ? "publishButtonActive" : "publishButtonNotActive"}
            onClick={this.state.imageload ? this.sendForm : null}>Publicar</button>
         </div>
      </div>

      <Feed updateData = {(postData) => this.setState({postData})} data = {this.state.postData} />

    </div>
  )}
}

export default Mainbody;