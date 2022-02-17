import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Formulario.css";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";

const postFilter = yup.object().shape({
  user: yup.string().required("Adicione seu nome por favor!"),
  message: yup.string().required("Adicione uma mensagem por favor!"),
});
export default function Formulario({ commentHandler, setImg, img }) {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postFilter),
  });

  const [id, setId] = useState(0);

  const addPost = (values) => {
    if (img && getValues("user") && getValues("message")) {
      commentHandler(values);
      idCreate(idCreate);
    } else {
      window.alert("Preencha todos os campos!");
    }
  };
  const resetPost = () => {
    setImg(undefined);
    deletePost(deletePost);
  };
  const deletePost = () => {
    reset();
  };

  const idCreate = (idNumber) => {
    const addId = {
      file: { img },
      user: getValues("user"),
      message: getValues("message"),
      id: id,
    };
    setId(id + 1);
    commentHandler(addId);
  };

  return (
    <div>
      <Container className="card-post" maxWidth="sm">
        <div className="card-body-post">
          <form onSubmit={handleSubmit()}>
            <div className="fields">
              <label for="Arquivo">
                {img ? (
                  <img
                    src={URL.createObjectURL(img)}
                    alt=""
                    className="imagePreview"
                  />
                ) : (
                  <AddIcon fontSize="large" className="iconImage" />
                )}
              </label>
              <input
                id="Arquivo"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
                className="file"
                type="file"
                /* {...register("file")}  */
              />
              <p className="error-message">{errors.file?.message}</p>
            </div>

            <div className="fields">
              <input
                placeholder="Digite seu nome"
                type="text"
                className="user"
                {...register("user")}
              />
              <p className="error-message">{errors.user?.message}</p>
            </div>

            <div className="fields">
              <textarea
                placeholder="Mensagem"
                type="text"
                className="message"
                {...register("message")}
              ></textarea>
              <p className="error-message">{errors.message?.message}</p>
              <div className="btns">
                <div className="btn-delete-post">
                  <button type="reset" onClick={resetPost}>
                    Descartar
                  </button>
                </div>
                <div className="btn-add-post">
                  <button
                    onClick={(e) => addPost(e.target.value)}
                    type="submit"
                  >
                    Publicar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
