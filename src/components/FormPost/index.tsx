import { StyledFormPost } from "./style";
import imageProfile from "../../assets/image@3x.png";
import { formHook } from "./use-form";
export const FormPost = () => {
  const { errors, handleSubmit, submitPost, reset, register } = formHook();
  return (
    <StyledFormPost onSubmit={handleSubmit(submitPost)}>
      <figure>
        <img src={imageProfile} alt="Imagem de perfil" />
      </figure>
      <fieldset>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("author")}
        />
        {errors.author && (
          <span className="error-msg">{errors.author.message}</span>
        )}
      </fieldset>
      <fieldset>
        <textarea id="" placeholder="Mensagem" {...register("content")} />
        {errors.content && (
          <span className="error-msg">{errors.content.message}</span>
        )}
      </fieldset>
      <div>
        <button
          disabled={errors?.author || errors.content ? true : false}
          type="button"
          onClick={() => reset()}
          className="discardBtn"
        >
          Descartar
        </button>
        <button
          disabled={errors?.author || errors.content ? true : false}
          type="submit"
          className="confirmBtn"
        >
          Publicar
        </button>
      </div>
    </StyledFormPost>
  );
};
