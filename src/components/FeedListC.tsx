import React from 'react';
import { TitleBox, H3, FeedList } from '../assets/styles';
import FeedPostC from './FeedPostC';

const FeedListC = (props:any) => {
    return (
        <FeedList>
            <TitleBox><H3>Feed</H3></TitleBox>
            {props.postList.map((item:any) => {
                return <FeedPostC id={item.id} thumbnail={item.imgSrc} msg={item.msg} author={item.author}
                    deletePost={props.deletePost}></FeedPostC>;
            })}
        </FeedList>
    );
}

export default FeedListC;