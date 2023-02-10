import React from "react";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import PublicationPanel from "./components/PublicationPanel/PublicationPanel";
import { PostContextProvider } from "./context/PostContext";

function App() {
    return (
        <PostContextProvider>
            <Header />
            <PublicationPanel />
            <Feed />
        </PostContextProvider>
    );
}

export default App;
