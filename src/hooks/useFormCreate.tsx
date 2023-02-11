import { useContext, ChangeEvent } from "react";
import { createContextGlobal } from "../context/GlobalContext";
import { Type } from "../helpers";
export default function useFormCreate() {
  const { dispatch, state } = useContext(createContextGlobal);

  return {
    handleChangeFiledPost: (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>
    ) => {
      dispatch({
        type: Type.ChangeInput,
        payload: {
          name: e.target.name,
          value: e.target.value,
        },
      });

      if (e.target.files) {
        dispatch({
          type: Type.FileImg,
          payload: {
            value: URL.createObjectURL(e.target.files[0]),
          },
        });
      }
    },

    removeFileImg: () => dispatch({ type: Type.RemoveFileImg }), 
    discardPorts: () => dispatch({ type: Type.ResetFields }),
    handleSubmitPost: (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({ type: Type.AddPost });
      dispatch({ type: Type.ResetFields });
    },
    state,
  };
}
