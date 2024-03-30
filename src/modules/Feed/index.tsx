import { Header } from "../../components/Header";
import { CardPost } from "./components/CardPost";
import { PostForm } from "./components/PostForm";
import * as S from "./styles";

export const Feed = () => {
  return (
    <S.Container>
      <Header />
      <PostForm />

      <S.FeedArea>
        <h4>Feed</h4>
        <CardPost />
      </S.FeedArea>
    </S.Container>
  );
};
