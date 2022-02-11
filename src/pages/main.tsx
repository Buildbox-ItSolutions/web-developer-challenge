import React from "react";
import Logo from "../assets/logo.png";
import './styles.css';

export default function Main(): JSX.Element {
  return (
    <div className="App">
      <header>
          <img className="photo-base align-middle" src={Logo} alt="Logo Build" />
          </header>
          <main>
            <div className="flex justify-around">
            <form>
            <img src="img/photo-base.png" className="photo-base"/>
              <div>
                <div className="flex flex-col">
                  <input type="text" className="name" />
                  <textarea className="comment" />
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse">
                <button className="align-text-bottom btn-active">Publicar</button>
                <button className="align-text-bottom Descartar">Descartar</button>
              </div>
            </form>
            </div>
            <div className="grid Retngulo-3">
              <span className="Feed">
                Feed
              </span>
              <img src="/" className="photo-base" />
              <span className="Lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.
              </span>
              <span className="Enviado-por">
                Enviado por
              </span>
              <span className="Manuela-Oliveira">
                Manuela Oliveira
              </span>
          </div>
          </main>
      <footer></footer>
    </div>
    );
}