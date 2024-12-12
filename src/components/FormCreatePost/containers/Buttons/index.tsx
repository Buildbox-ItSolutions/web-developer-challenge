import { GridButtonsPost, ButtonsPost } from "../../../../styles";
import useFormCreate from "../../hooks/useFormCreate";

export default function Buttons() {
  const { discardPorts, state } = useFormCreate();

  return (
    <GridButtonsPost>
      <ButtonsPost
        onClick={discardPorts}
        type="button"
        backgroundColor={"transparent"}
        color={"#5f5f5f"}
        textDecoration={"underline"}
      >
        Descartar
      </ButtonsPost>
      <ButtonsPost
        disabled={
          state.fields.valueImg && state.fields.message && state.fields.author
            ? false
            : true
        }
        backgroundColor={
          state.fields.valueImg && state.fields.message && state.fields.author
            ? "#71bb00"
            : "#5f5f5f"
        }
        color={
          state.fields.valueImg && state.fields.message && state.fields.author
            ? "#ffffff"
            : "#313131"
        }
        type="submit"
      >
        Publicar
      </ButtonsPost>
    </GridButtonsPost>
  );
}
