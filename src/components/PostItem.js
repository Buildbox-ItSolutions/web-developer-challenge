import {motion} from "framer-motion";
import React, {useContext} from "react";
import styled from "styled-components";

import Delete from "../assets/images/delete.svg";
import PostContext from "../store/post-context";

const PostSty = styled(motion.div)`
  width: 100%;
  background-color: var(--color-gray-bg-two);
  padding: 3.5rem 1.5rem;
  margin-bottom: 1rem;
  border: solid 1px var(--color-gray-border-one);
  position: relative;
  display: flex;

  img {
    width: 88px;
    height: 88px;
    border-radius: 40%;
  }

  .post__content-wrapper {
    width: 100%;
    margin-left: 2rem;
    word-break: break-word;

    .content {
      font-size: var(--text-bg);
      margin-bottom: 1.5rem;
      color: var(--color-gray-text);
    }

    .tag {
      font-size: var(--text-sm);
      color: var(--color-gray-send);
    }

    .author {
      font-size: var(--text-md);
      color: var(--color-gray-title);
    }
  }

  button {
    position: absolute;
    top: 12px;
    right: 12px;
    border: 0;
    background-color: transparent;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: inherit;
      height: inherit;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .post__content-wrapper {
      margin-left: 0;
    }
  }
`;

const child = {
    hidden: {y: -20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
    },
};

const PostItem = ({post}) => {
    const {deletePost} = useContext(PostContext);

    return (
        <PostSty key={post.id} variants={child}>
            <img src={post.image} alt="author"/>
            <div className="post__content-wrapper">
                <p className="content">{post.message}</p>
                <p className="tag">Enviado por</p>
                <p className="author">{post.name}</p>
            </div>

            <button onClick={() => deletePost(post.id)}>
                <img src={Delete} alt="delete post"/>
            </button>
        </PostSty>
    );
};

export default PostItem;
