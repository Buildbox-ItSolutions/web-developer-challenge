import { XCircle } from 'phosphor-react';
import React from 'react'
import * as P from './styles'
import postPhoto from '/src/assets/photo-base.png'


const Post: React.FC = () => {
  return (
    <P.Container>
      <P.Header>
        <XCircle size={26} weight="light" />
      </P.Header>
      <P.ControlContainer>
        <P.LeftCol>
          <img src={postPhoto} alt="" />
        </P.LeftCol>
        <P.RightCol>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.
          </span>
          <div className="author">
            <small>
              Enviado por
            </small>
            <p>Manuela Oliveira</p>
          </div>
        </P.RightCol>
      </P.ControlContainer>
    </P.Container>
  )
}

export default Post;