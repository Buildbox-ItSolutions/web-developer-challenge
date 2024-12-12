import Feed from "../../components/ui/Feed";
import PostForm from "../../components/forms/PostForm";
import Header from "../../components/ui/Header";

import { CardsList, HomeContainer, SiteContent } from "./styles";

function Home() {
  return (
    <HomeContainer>
      <Header />
      <SiteContent>
        <CardsList>
          <PostForm />
          <Feed />
        </CardsList>
      </SiteContent>
    </HomeContainer>
  );
}

export default Home;
