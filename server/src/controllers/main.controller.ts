import { Request, Response } from "express";
import { db } from "../database/connection";

export class MainController {
  public async index(request: Request, response: Response) {
    response.status(200).json({
      message:
        "API REST com SQLite para persistência de dados a serem consumidos pelo cliente em React.",
    });
  }

  public async getPosts(request: Request, response: Response) {
    db.all("SELECT * FROM posts", [], (err, rows) => {
      if (err) {
        console.error(err);
        return response
          .status(500)
          .json({ success: false, message: "Erro ao obter os posts." });
      }
      return response.status(200).json({ success: true, data: rows });
    });
  }

  public async createPost(request: Request, response: Response) {
    const { nome, mensagem, imagem } = request.body;
    db.run(
      "INSERT INTO posts (nome, mensagem, imagem) VALUES (?, ?, ?)",
      [nome, mensagem, imagem],
      function (err) {
        if (err) {
          console.error(err);
          return response
            .status(500)
            .json({ success: false, message: "Erro ao criar o post." });
        }
        return response
          .status(200)
          .json({ success: true, message: "Post criado com sucesso!" });
      }
    );
  }

  public async deletePost(request: Request, response: Response) {
    const { id } = request.params;
    db.run("DELETE FROM posts WHERE id = ?", [id], function (err) {
      if (err) {
        console.error(err);
        return response
          .status(500)
          .json({ success: false, message: "Erro ao deletar o post." });
      }
      return response
        .status(200)
        .json({ success: true, message: "Post deletado com sucesso!" });
    });
  }
}
