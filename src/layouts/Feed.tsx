import React, { useState } from 'react';
import { Wrapper, Spacing, ContentWrapper } from '../assets/styles';
import HeaderC from '../components/HeaderC';
import PostInputBoxC from '../components/PostInputBoxC';
import FeedListC from '../components/FeedListC';

import testImg1 from '../assets/2.jpg';
import testImg2 from '../assets/4.jpeg';

const Page = (props:any) => {
    const [formInputs, setFormInputs] = useState({
        'id': -1, 'imgSrc': '', 'author': '', 'msg': ''
    });
    
    function resetFormInputs(){
        setFormInputs({'id': -1, 'imgSrc': '', 'author': '', 'msg': ''});
    }

    const [postList, setPostList] = useState([
        {'id': 0, 'imgSrc': testImg1, 'author': 'Bruno G. Ody', 'msg': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo imperdiet dolor, eu fermentum felis porttitor vitae. Vivamus vitae molestie magna. Aliquam dignissim est cursus rhoncus ultrices. Aliquam vel fermentum urna, sit amet aliquet ipsum. Aenean a neque et quam tincidunt ullamcorper.'},
        {'id': 1, 'imgSrc': testImg2, 'author': 'Bruno G. Ody', 'msg': 'Nulla ut metus ac lectus aliquam ullamcorper. Quisque venenatis venenatis eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer porttitor sem nisl, in eleifend lacus consequat eget. Nulla luctus nibh a velit consequat viverra.'}
    ]);

    function addPostToList(post:any){
        let _postList:any = [];
        postList.forEach(item => _postList.push(Object.assign({}, item)));
        _postList.push(Object.assign({}, post));
        setPostList(_postList);
    }

    function deletePost(id:number){
        let _postList:any = [];
        postList.forEach(item => _postList.push(Object.assign({}, item)));
        let i = -1;
        for(let x = 0; x < _postList.length; x++){
            if(_postList[x].id == id){
                i = x;
            }
        };
        if (i > -1) {
            _postList.splice(i, 1);
        }
        setPostList(_postList);
    }

    return(
        <Wrapper>
            <HeaderC></HeaderC>
            <Spacing></Spacing>
            <ContentWrapper>
                <PostInputBoxC formInputs={formInputs} setFormInputs={setFormInputs}
                                resetFormInputs={resetFormInputs}
                                postList={postList} addPostToList={addPostToList}></PostInputBoxC>
                <FeedListC postList={postList} deletePost={deletePost}></FeedListC>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Page;