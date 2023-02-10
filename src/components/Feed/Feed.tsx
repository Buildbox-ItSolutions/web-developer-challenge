import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import Post from "../PostItems/Post";

const Feed = () => {
    const {post} = useContext(PostContext);
    return (
        <div>
            <>
                {post.map((post, index) => {
                    return <Post key={`${post.id}-${index}`} id={post.id} name={post.name} content={post.content} image={post.img} />;
                })}
            </>
        </div>
    );
};

export default Feed;
