import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { PostsTypes, PostActionTypes, Post } from './types';

const INITIAL_STATE: Post[] = [
  {
    id: uuidv4(),
    name: 'Rafael Dias de Souza',
    message: `
          Bem-vindo!
          Este projeto foi criado utilizando ReactJS e Typescript com o auxílio de outras bibliotecas como Redux e styledComponents.
          Além disso, os componentes foram documentados com storybook.js, o que permitiu um desenvolvimento orientado a componentes começando pelos menores como botões e inputs e seguindo os princípios de Atomic Design.
          Também foram utilizadas bibliotecas de padronização, como ESLint e Prettier para o código e husky.js, lint-staged e commitlint para padronização e automatizaçao dos commits.
          Espero que goste :)`,
    previewImage: {
      name: '',
      url:
        'https://avatars0.githubusercontent.com/u/43359988?s=460&u=bc2345818b428a1807b8690f27a8787d998eafc6&v=4',
    },
    likes: 0,
  },
];

const reducer = (state = INITIAL_STATE, action: PostActionTypes) => {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case PostsTypes.CREATE_POST: {
        draft.push({
          id: uuidv4(),
          name: action.payload.name,
          message: action.payload.message,
          previewImage: action.payload.previewImage,
          image: action.payload.image,
          likes: action.payload.likes,
        });
        break;
      }
      case PostsTypes.DELETE_POST:
        const newState = draft.filter(
          (post: Post) => post.id !== action.payload,
        );
        return newState;
      case PostsTypes.LIKE_POST:
        const postIndex = draft.findIndex(
          (post: Post) => post.id === action.payload,
        );
        // eslint-disable-next-line
        draft[postIndex] = {
          ...draft[postIndex],
          likes: draft[postIndex].likes + 1,
        };
        break;
      default:
        return draft;
    }
  });
};

export default reducer;
