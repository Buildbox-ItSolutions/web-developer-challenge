import React, { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import { Context } from "../../contexts/ContextData";
import { ContextFeed } from "../../contexts/ContextFeed";

import FeedClose from "../../images/Feed/delete.png";

import Container from "./styles";

const FeedPost = () => {
  const contData = useContext(Context);
  const contFeed = useContext(ContextFeed);

  const [values, setValues] = useState<any[]>([]);

  useEffect(() => {
    let img = contData.state.image;
    let name = contData.state.name;
    let msg = contData.state.msg;

    if (img !== "" && name !== "" && msg !== "" && contFeed.stateFeed.status) {
      values.push({
        img,
        name,
        msg,
      });
      contData.setState({ image: "", name: "", msg: "" });
      contFeed.setStateFeed({ status: false });
    }
  }, [contFeed, contData, values]);

  useEffect(() => {}, [values]);

  const removePost = (
    v: number,
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    let elem = e.target as HTMLAreaElement;
    elem.parentElement?.classList.remove("active");

    let newValues: string[] = [...values];
    delete newValues[v];

    elem.parentElement?.addEventListener("animationend", () => {
      setValues(newValues);
    });
  };

  const verifyValues = () => {
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== null && typeof values[i] === "object") {
        return true;
      }
    }
    return false;
  };

  return (
    <Container>
      <p>Feed</p>

      {!verifyValues() && (
        <div className="empty-feed">
          <span>Seu feed está vazio, crie posts!</span>
          <Loader
            type="Oval"
            color="#71bb00"
            height={20}
            width={20}
            timeout={4000}
          />
        </div>
      )}

      {values
        .map((v, i) => {
          if (v !== null && typeof v === "object") {
            return (
              <div className="active" key={i}>
                <div>
                  <img src={v.img} alt="Img" />
                </div>
                <div>
                  <div>
                    <p>{v.msg}</p>
                  </div>
                  <div>
                    <p>Enviado por</p>
                    <p>{v.name}</p>
                  </div>
                </div>
                <img
                  src={FeedClose}
                  alt="Close"
                  onClick={(e) => {
                    removePost(i, e);
                  }}
                />
              </div>
            );
          } else {
            return null;
          }
        })
        .reverse()}
    </Container>
  );
};

export default FeedPost;
