import React, {Component} from "react";
import { FaFileImage, FaRegWindowClose } from "react-icons/fa";

import './Feed.css';

class Feed extends Component {
  deleteCard = (pos) => {
    const newData = [...this.props.data];
    newData.splice(pos, 1);
    this.props.updateData(newData)
  }

  render(){
    return this.props.data.map((item, pos) => {
      return (
        <div className="indivCard" key={pos}>
          <div className={item.imageload ? "imageCardBorderlessFeed" : "imageCardFeed"}>
            {item.imageload ?
                <img src={require('../assets/' + item.img + '.jpg')} alt="imagerender" />
              :
                <FaFileImage className="imagelogo" />
            }
          </div>
          <div className="bodyCard">
            <p className="textCard">{item.text}</p>
            <div className="nameCard">
              <p className="enviadoPor"> Enviado por:</p>
              <p className="nomeEnviado"> {item.nome} </p>
            </div>
          </div>
          <div className="deleteButton" onClick={() => this.deleteCard(pos)}>
            <FaRegWindowClose className="deleteButtonIcon" />
          </div>
        </div>
      )
    })
    }
  }

export default Feed;