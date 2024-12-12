import { v4 as uuidv4 } from "uuid";
import { State, Type, Action } from "../../helpers/types";

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case Type.ChangeInput:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.name]: action.payload.value,
        },
      };
    case Type.FileImg:
      return {
        ...state,
        fileImg: action.payload.value,
      };
    case Type.RemoveFileImg:
      return {
        ...state,
        fields: { ...state.fields, valueImg: "" },
      };

    case Type.ResetFields:
      return {
        ...state,
        fields: { ...state.fields, valueImg: "", message: "", author: "" },
      };

    case Type.AddPost:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: uuidv4(),
            message: state.fields.message,
            author: state.fields.author,
            fileImg: state.fileImg,
          },
        ],
      };

    case Type.RemovePost:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };

    default:
      return state;
  }
}
