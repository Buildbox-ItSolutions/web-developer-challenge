import { PostPage } from "./page";
import GlobalContext from "./context/GlobalContext";
export default () => (
  <GlobalContext>
    <PostPage />
  </GlobalContext>
);