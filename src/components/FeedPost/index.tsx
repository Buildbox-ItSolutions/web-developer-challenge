import React, { useContext, useEffect, useState } from "react";

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

  const removePost = (v: number) => {
    let newValues: string[] = [];
    for (let i = 0; i < values.length; i++) {
      if (i !== v) {
        newValues.push(values[i]);
      }
    }
    setValues(newValues);
  };

  return (
    <Container>
      <p>Feed</p>
      {values.map((v, i) => {
        return (
          <div key={i}>
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
              className={i.toString()}
              onClick={() => removePost(i)}
            />
          </div>
        );
      })}
    </Container>
  );
};

export default FeedPost;
