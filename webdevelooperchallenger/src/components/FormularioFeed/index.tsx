import { useRef } from "react";
import { formularioProps } from "../../models/Formulario";
import { postsProps } from "../../models";




const FormularioFeed = ({ handleCriarPost }: formularioProps) => {
  const nomeCard = useRef<HTMLInputElement>(null);
  const mensagemCard = useRef<HTMLTextAreaElement>(null);

  const criarPost = () => {
    if (!nomeCard.current?.value && !mensagemCard.current?.value) {
      return;
    }
    const novoPost = {
      nome: nomeCard.current?.value ?? "",
      mensagem: mensagemCard.current?.value ?? "",
    } satisfies postsProps;

    handleCriarPost(novoPost);

    if (nomeCard.current?.value && mensagemCard.current?.value) {
      nomeCard.current.value = "";
      mensagemCard.current.value = "";
    }
  };

  return (
    <section className="box-informacao">
      <div className="photo-upload"></div>
      <div className="form-control">
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite seu nome"
          ref={nomeCard}
        />
      </div>
      <div className="form-control">
        <textarea
          name="mensagem"
          id="mensagem"
          placeholder="Mensagem"
          ref={mensagemCard}
        ></textarea>
      </div>

      <div className="box-action">
        <a href="">Descartar</a>
        <button onClick={() => criarPost()}>Publicar</button>
      </div>
    </section>
  );
};

export default FormularioFeed;
