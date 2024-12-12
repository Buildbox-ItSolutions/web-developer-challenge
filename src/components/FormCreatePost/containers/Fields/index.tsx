import useFormCreate from "../../hooks/useFormCreate";
import { InputPost, TextareaPost, GridInput } from "../../../../styles";

export default function Fields() {
  const { handleChangeFiledPost, state } = useFormCreate();

  return (
    <>
      <GridInput>
        <InputPost
          placeholder="Digite seu nome"
          name="author"
          value={state.fields.author}
          onChange={handleChangeFiledPost}
        />
      </GridInput>
      <GridInput>
        <TextareaPost
          placeholder="Mensagem"
          name="message"
          value={state.fields.message}
          onChange={handleChangeFiledPost}
        />
      </GridInput>
    </>
  );
}
