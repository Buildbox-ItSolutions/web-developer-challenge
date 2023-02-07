import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { PostsProvider } from "../contexts/posts";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  );
};

export default MyApp;
