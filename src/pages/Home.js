import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Formulario from "../components/Formulario/Formulario";
import Comment from "../components/Comment/Comment";

export default function Home() {
  const [comments, setComments] = useState([]);

  const [img, setImg] = useState();

  const commentHandler = (comment) => {
    setComments([...comments, comment]);
  };
   const deleteComment = (id) => {
    var filtered = comments.filter( (comment) => comment.id !== id);
    setComments(filtered);
   }

  console.log(comments);
  return (
    <div style={{ backgroundColor: "#343434", height: "auto" }}>
      <Navbar />
      {/*       <Formulario setComments={setComments} comments={comments} />
       */}
      <Formulario img={img} setImg={setImg} commentHandler={commentHandler} />
      <p className="FeedTitle">Feed</p>
      {comments.map((comment) => (
        <>
          <Comment img={img} setImg={setImg} deleteComment={deleteComment} comment={comment} />
          <br></br>
          <br></br>
        </>
      ))}
    </div>
  );
}
