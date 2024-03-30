import { Header } from "../../components/Header";
import { PostForm } from "./components/PostForm";
import * as S from "./styles";

export const Feed = () => {
  return (
    <S.Container>
      <Header />
      <PostForm />
    </S.Container>
  );
};
