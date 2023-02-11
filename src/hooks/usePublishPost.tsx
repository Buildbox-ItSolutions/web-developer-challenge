import { useContext } from "react";
import { createContextGlobal } from "../context/GlobalContext";
import { Type } from "../helpers";
export default function usePublishPost() {
  const { dispatch, state } = useContext(createContextGlobal);
  
  const {posts} = state

  return {
    handleClickRemovePost: (id: string) =>
      dispatch({
        type: Type.RemovePost,
        payload: {
          id: id,
        },
      }),

    posts,
  };
}
