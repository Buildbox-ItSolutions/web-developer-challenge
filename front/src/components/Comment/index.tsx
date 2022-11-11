import React from 'react';
import { CommentBox, WrapperImage } from './Component';
import './style.css';

import img from '../../assets/delete.svg';

interface IPost{
    posts: any[]
    onDeletePost: (posts: any[]) => void;
}

export function Comment({posts, onDeletePost}: IPost){

    function handleClick(e: any, index: Number){
        const temp = [...posts]

        temp.splice(Number(index), 1)
        onDeletePost([...temp])      
    }

    return(
        <>
            {posts.map((post, i) => {
                return(
                    <CommentBox className="post" key={i}>
                        <div className="close--wrapper">
                            <button id='delete'
                            onClick={(e) => handleClick(e, i)}
                            ><img src={img} alt="delete" /></button>
                        </div>
                        <div className="aux">
                            <WrapperImage>
                                <img src={post.image} alt="" />
                            </WrapperImage>
                            <div className="wrapper-text">
                                <p>{post.comment}</p>
                                <div className="sendBy">
                                    <span>Enviado por:</span>
                                    <span className='author'>{post.name}</span>
                                </div>
                            </div>
                        </div>
                    </CommentBox>
                )
            })}
        </>
    );
}