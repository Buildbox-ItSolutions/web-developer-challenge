import React from 'react';
import { FeedPost, ThumbnailBox, MsgBox, PostThumbnail, MsgText, DeleteButtonBox, DeleteButton, DeleteIcon, 
            AuthorBox, EnviadoPor, AuthorName } from '../assets/styles';

const FeedPostC = (props:any) => {
    function deletePost(){
        props.deletePost(props.id);
    }

    return (
        <FeedPost>
            <ThumbnailBox>
                <PostThumbnail src={props.thumbnail}></PostThumbnail>
            </ThumbnailBox>
            <MsgBox>
                <MsgText>{props.msg}</MsgText>
            </MsgBox>
            <DeleteButtonBox>
                <DeleteButton onClick={deletePost}>
                    <DeleteIcon></DeleteIcon>
                </DeleteButton>
            </DeleteButtonBox>
            <AuthorBox>
                <EnviadoPor>Enviado por</EnviadoPor>
                <AuthorName>{props.author}</AuthorName>
            </AuthorBox>
        </FeedPost>
    );
}

export default FeedPostC;