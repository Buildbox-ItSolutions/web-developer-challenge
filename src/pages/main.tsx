import React, { TextareaHTMLAttributes, useRef, useState ,useEffect} from "react";
import Logo from "../assets/logo.png";
import './styles.css';
import ImagePost from "../components/imagePost/ImgPost";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  insertPost,
  removePost,
  selectPost,
  PostState,
} from "../slicers/postsSlice";

export default function Main(): JSX.Element {
  const hashtag = useRef<HTMLSpanElement>(null);
  const nome = useRef<HTMLInputElement>(null);
  const comentario = useRef<HTMLTextAreaElement>(null);
  const hashtagEdit = true;
  const posts = useAppSelector(selectPost);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header>
        <img className="photo-base align-middle" src={Logo} alt="Logo Build" />
      </header>
      <main>
        <div className="flex justify-around">
          <form
            onSubmit={(e)=>{ 
              const target = e.target as HTMLFormElement;
              saveFormData(target.elements);
              e.preventDefault();
            }}
          > 
            <ImagePost />
            <div>
              <div className="flex flex-col">
                <input ref={nome} type="text" className="name" name="nome"/>
                <textarea ref={comentario} className="comment" name="comentario"/>
                <div className="px-6 pt-4 pb-2">
                  <span ref={hashtag} contentEditable suppressContentEditableWarning={true} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #{}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <button 
                className="align-text-bottom btn-active"
                type="submit"
                >Publicar</button>
              <button className="align-text-bottom Descartar">Descartar</button>
            </div>
          </form>
        </div>
        <span className="Feed">
          Feed
        </span>
        {posts.map((post,i) => (
          <div key={i} className="grid Retngulo-3">
            <img src="/" className="photo-base" />
            <span className="Lorem">
              {post.comment}
            </span>
            <span className="Enviado-por">
              Enviado por
            </span>
            <span className="Manuela-Oliveira">
              {post.name}
            </span>
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );

  function saveFormData(elements: HTMLFormControlsCollection) {
    const hashtagValue = hashtag.current!.innerText;
    const post: PostState = {
      comment: (elements.namedItem("comentario") as HTMLTextAreaElement).value,
      photo: "img/photo-base.png",
      name: (elements.namedItem("nome") as HTMLInputElement).value,
      tags: [hashtagValue],
      time: new Date(),
    };
    dispatch(insertPost(post));
    console.log(post);

  }
}