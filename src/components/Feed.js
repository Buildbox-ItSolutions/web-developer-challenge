import React, {useContext} from "react";
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";

import PostContext from "../store/post-context";
import PostItem from "./PostItem";

const FeedSty = styled(motion.div)`
  width: min(516px, 90%);
  margin: 2.5rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const container = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.9,
        },
    },
};

const Feed = () => {
    const {posts} = useContext(PostContext);

    let postsFormat = [...posts];
    postsFormat.reverse();

    return (
        <FeedSty variants={container} initial="hidden" animate="visible">
            <AnimatePresence>
                {postsFormat.map((post) => (
                    <PostItem key={post.id} post={post}/>
                ))}
            </AnimatePresence>
        </FeedSty>
    );
};

export default Feed;
