import React from "react";
import Container from "@mui/material/Container";
import "./Comment.css";
import Martelo from "./martelo.png";
import "../Formulario/Formulario";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function Comment({ comment, deleteComment, img }) {
  return (
    <div className="feed-body">
      <Container maxWidth="sm" className="feed-post">
        <IconButton
          sx={{
            marginLeft: "95%",
            marginTop: "3%",
            cursor: "pointer",
            color: "#6a6a6a",
            transition: "0.5s",
          }}
          className="deleteIcon"
          aria-label="delete"
          onClick={() => deleteComment(comment?.id)}
        >
          <DeleteIcon />
        </IconButton>
        <div className="Content">
          {img ? (
            <img className="Image" alt={img} src={URL.createObjectURL(img)} />
          ) : null}
          <p className="TextContent"> {comment?.message} </p>
        </div>
        <div className="profileInfo">
          <p className="sendBy">Enviado por</p>
          <p className="userName">{comment?.user}</p>
        </div>
      </Container>
    </div>
  );
}
