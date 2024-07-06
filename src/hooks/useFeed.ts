import { useContext } from "react";
import { PostFeedContext } from "../context/feedContext";

const useFeed = () => {
    const context = useContext(PostFeedContext);
    if (context === undefined) {
        throw new Error("useFeed must be used within a PostContextProvider");
    }
    return context;
};

export default useFeed;
